let gameEl = document.getElementById("game");

const px = (number) => {
  return `${number}px`;
};

gameEl.style.position = "relative";

const setCanvas = (w, h, color = "black") => {
  width = w;
  height = h;

  gameEl.style.backgroundColor = color;
  gameEl.style.width = width;
  gameEl.style.height = height;
};
setCanvas(width, height);

const clear = () => {
  gameEl.innerHTML = "";
};

const rect = (x, y, w = 1, h = null, color = "white") => {
  if (h == null) {
    h = w;
  }
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.backgroundColor = color;
  rect.style.left = px(x);
  rect.style.top = px(y);
  rect.style.width = px(w);
  rect.style.height = px(h);
  gameEl.appendChild(rect);
};

const rectCorners = (x1, y1, x2, y2) => {
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.backgroundColor = "white";
  rect.style.left = px(x1);
  rect.style.top = px(y1);
  rect.style.width = px(x2 - x1);
  rect.style.height = px(y2 - y1);
  gameEl.appendChild(rect);
};

const rectCenter = (x, y, width, height) => {
  let rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.style.backgroundColor = "white";
  rect.style.left = px(x - width / 2);
  rect.style.top = px(y - height / 2);
  rect.style.width = px(width);
  rect.style.height = px(height);
  gameEl.appendChild(rect);
};

setup();
let gameInterval;
window.setTimeout(() => {
  gameInterval = window.setInterval(game, 33);
}, 50);
// game()
const noLoop = () => {
  window.clearInterval(gameInterval);
};
