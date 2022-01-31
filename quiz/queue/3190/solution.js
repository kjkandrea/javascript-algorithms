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
    return this.map?.[x]?.[y]
  }
}

class Direction {
  orders = ['R', 'B', 'L', 'T']

  constructor (direction = 'R') {
    this.index = this.orders.findIndex(v => v === direction);
  }

  get value () {
    return this.orders[this.index]
  }

  right () {
    this.index += 1
    if (this.index >= this.orders.length) this.index = 0;
  }

  left () {
    this.index -= 1
    if (0 > this.index) this.index = this.orders.length - 1;
  }
}

function generateSquare(n, applePosition) {
  return new Square(n, applePosition);
}

/**
 * 1. 그냥 벽에 부딪히는 경우의 수 : 완료
 * 2. 자기 몸에 부딪히는 경우의 수 : fail
 */
function solution (n, applePosition, moveCommands) {
  const square = generateSquare(n, applePosition)
  const currentPosition = [0, 0] // x, y
  // console.log(square.getItem(...currentPosition))

  let len = 1;
  let time = 0;
  let direction = new Direction('R')

  // moveCommands.splice(0, 1)
  for (const [step, changeDirection] of moveCommands) {
    for (let i = 1; i <= step;i +=1) {
      time += 1;

      switch (direction.value) {
        case 'R':
          currentPosition[0] += 1
          break;
        case 'L':
          currentPosition[0] -= 1
          break;
        case 'T':
          currentPosition[1] -= 1
          break;
        case 'B':
          currentPosition[1] += 1
          break;
      }

      if (square.getItem(...currentPosition) === undefined) return time; // dead.
      if (square.getItem(...currentPosition) === '🍎') len += 1; // level up.
    }

    changeDirection === 'D'
      ? direction.right()
      : direction.left()
  }
}

console.log(
solution(square, applePosition, moveCommands)
)