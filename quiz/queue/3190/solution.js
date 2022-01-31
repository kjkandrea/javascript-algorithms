import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
const square = Number(lines.shift())
const appleLength = Number(lines.shift())
const applePosition = lines.splice(0, appleLength).map(p => p.split(' ').map(Number))
const moveCmdLength = Number(lines.shift())
const moveCmd = lines.map(cmd => {
  const [time, direction] = cmd.split(' ')
  return [Number(time), direction]
})

console.log({
  square,
  appleLength,
  applePosition,
  moveCmdLength,
  moveCmd
})

class Square {
  constructor (n, applePosition) {
    this.map = Array.from(Array(n), () => Array.from(Array(n), () => null))
    this.setApples(applePosition)
  }

  setApples(applePosition) {
    for (const [x, y] of applePosition) {
      this.map[x][y] = '🍎'
    }
  }

  getItem (y, x) {
    return this.map[x][y]
  }
}

function generateSquare(n, applePosition) {
  return new Square(n, applePosition);
}

function solution (n, applePosition) {
  const square = generateSquare(n, applePosition)
  console.log(square)
  const currentPosition = [5, 2]
  console.log(square.getItem(...currentPosition))
  let len = 1;
}

solution(square, applePosition)