function setup(){

    setCanvas(1000, 600, 'orange')
}
class Cell{
    constructor(x, y){
        this.white = false
        this.x = x
        this.y = y
    }
}
let cells = []
let size = 5
let ant = [width/size/2,height/size/2]
let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]
let dir = 0
for(let x = 0; x < width/size; x++){
    cells.push([])
    for(let y = 0; y < height/size; y++){
        cells[x].push(new Cell(x, y))
    }
}

function game() {
    clear()
    for(let x = 0; x < cells.length; x++){
        for(let y = 0; y < cells[0].length; y++){
            let current = cells[x][y]
            if(current.white){
                rect(current.x*size, current.y*size, size, size)
            }
        }
    }
    for(let i = 0; i < 100; i++){
        ant[0] += dirs[dir][0]
        ant[1] += dirs[dir][1]
        if(ant[0] < 0) ant[0] = cells.length-1
        if(ant[0] >= cells.length) ant[0] = 0
        if(ant[1] < 0) ant[1] = cells[0].length-1
        if(ant[1] >= cells[0].length) ant[1] = 0
        cells[ant[0]][ant[1]].white = !cells[ant[0]][ant[1]].white
        if(cells[ant[0]][ant[1]].white){
            dir++
            if(dir == 4){
                dir = 0
            }
        }else{
            dir--
            if(dir == -1){
                dir = 3
            }
        }
    }
    // noLoop()
}
