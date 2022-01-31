import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
const square = Number(lines.shift())
const appleLength = Number(lines.shift())
const applePosition = lines.splice(0, appleLength).map(p => p.split(' ').map(Number))
const moveCmdLength = Number(lines.shift())
const moveCommands = lines.map(cmd => {
  const [time, direction] = cmd.split(' ')
  return [Number(time), direction]
})

console.log({
  square,
  appleLength,
  applePosition,
  moveCmdLength,
  moveCommands
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

function solution (n, applePosition, moveCommands) {
  const square = generateSquare(n, applePosition)
  const currentPosition = [0, 0] // x, y
  // console.log(square.getItem(...currentPosition))

  let len = 1;
  let time = 0;
  let direction = 'R' // 'R'|'L'|'T'|'D'

  // moveCommands.splice(0, 1)
  for (const [step, changeDirection] of moveCommands) {
    for (let i = 1; i <= step;i +=1) {
      time += 1;

      if (direction === 'R') {
        currentPosition[0] += 1
      }
      if (direction === 'L') {
        currentPosition[0] -= 1
      }
      if (direction === 'T') {
        currentPosition[1] -= 1
      }
      if (direction === 'B') {
        currentPosition[1] += 1
      }

      if (square.getItem(...currentPosition) === undefined) return time; // dead.
      if (square.getItem(...currentPosition) === '🍎') len += 1; // level up.
    }
  }
}

console.log(
solution(square, applePosition, moveCommands)
)