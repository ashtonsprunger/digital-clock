const numbers = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [2, 2],
    [0, 3],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [0, 0],
    [1, 0],
    [0, 2],
    [1, 2],
    [0, 4],
    [1, 4],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 3],
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 1],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [2, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
];
let size = Math.floor(document.documentElement.clientWidth / 29);
let leftOffset =
  ((document.documentElement.clientWidth / 29 - size) * 15) / size;
let topOffset = document.documentElement.clientHeight / 2 / size - 3;

let hour = 0;
let min = 0;
let sec = 0;

function setup() {}

function game() {
  clear();
  updateCurrentTime();
  drawNumber(hour, 1 + leftOffset, topOffset);
  drawColon(9 + leftOffset, topOffset);
  drawNumber(min, 11 + leftOffset, topOffset);
  drawColon(19 + leftOffset, topOffset);
  drawNumber(sec, 21 + leftOffset, topOffset);
}

const updateCurrentTime = () => {
  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
};

const drawNumber = (num, x, y) => {
  if (num.toString().length == 1) {
    num = `0${num}`;
  } else {
    num = num.toString();
  }
  let location = 0;
  for (let i = 0; i < num.length; i++) {
    let number = numbers[parseInt(num[i])];
    for (let j = 0; j < number.length; j++) {
      let current = number[j];
      rect(
        current[0] * size + x * size + location * size,
        current[1] * size + y * size,
        size,
        size
      );
    }
    location += 4;
  }
};

const drawColon = (x, y, color = "white") => {
  rect(x * size, y * size + 1 * size, size, size, color);
  rect(x * size, y * size + 3 * size, size, size, color);
};

const colorVal = () => {
  let lightness = 200;
  darkness = 200;
  return Math.random() * (lightness - darkness) + darkness;
};

const colorStr = () => {
  return `rgb(${colorVal()},${colorVal()},${colorVal()})`;
};
