import fs from "fs"

const lines = fs.readFileSync('./case3.txt', 'utf8').split('\n')
const square = Number(lines.shift())
const appleLength = Number(lines.shift())
const applePosition = lines.splice(0, appleLength).map(p => p.split(' ').map(Number))
lines.shift()
const moveCommands = lines.map(cmd => {
  const [time, direction] = cmd.split(' ')
  return [Number(time), direction]
})

// console.log({
//   square,
//   appleLength,
//   applePosition,
//   moveCommands
// })

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0;
  }

  static getNode(value) {
    return {
      value,
      next: null
    }
  }

  enqueue(value) {
    const node = Snake.getNode(value)
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  dequeue() {
    if (!this.head) return undefined;
    const value = this.head.value
    this.head = this.head.next
    this.size -= 1;
    return value
  }
}

class Snake extends Queue {
  constructor () {
    super();
    this.maxLength = 1;
  }

  move(value) {
    if (this.maxLength >= 4) {
        console.log('buffer', this.buffer)
        console.log('dead : ', value)
    }

    this.enqueue(value)
    if (this.size > this.maxLength) {
      this.dequeue()
    }
  }

  get buffer () {
    const result = [];
    let currentNode = this.head
    while(currentNode.next) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }
    return result
  }

  includes(value) {
    let currentNode = this.head
    while(currentNode.next) {
      if (value.toString() === currentNode.value.toString()) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Position {
  constructor () {
    this.value = [0, 0]
    this.snake = new Snake()
    this.snake.move(this.value)
  }

  update(direction) {
    switch (direction) {
      case 'R':
        this.value[0] += 1
        break;
      case 'L':
        this.value[0] -= 1
        break;
      case 'T':
        this.value[1] -= 1
        break;
      case 'B':
        this.value[1] += 1
        break;
    }
    this.snake.move(this.value)
  }
}

class Square {
  constructor (n, applePosition) {
    this.map = Array.from(Array(n), () => Array.from(Array(n), () => null))
    this.setApples(applePosition)
  }

  setApples(applePosition) {
    for (const [x, y] of applePosition) {
      this.map[x - 1][y - 1] = '🍎'
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
  const position = new Position()
  // console.log(square.getItem(...currentPosition))

  let time = 0;
  let direction = new Direction('R')

  for (const [step, changeDirection] of moveCommands) {
    for (let i = time + 1; i <= step;i +=1) {
      time += 1;

      console.log(position.value)
      position.update(direction.value)

      // dead. wall
      if (square.getItem(...position.value) === undefined) {
        return time;
      }

      // TODO: dead. suicide
      if (position.snake.maxLength >= 4) {
        if (position.snake.includes(position.value)) {
          console.log(position.value)
          console.log(position.snake)
          return time;
        }
      }

      if (square.getItem(...position.value) === '🍎') position.snake.maxLength += 1; // level up.
    }

    changeDirection === 'D'
      ? direction.right()
      : direction.left()
  }

  while(square.getItem(...position.value) !== undefined) {
    time += 1;

    position.update(direction.value)
  }

  return time;
}

console.log(
solution(square, applePosition, moveCommands)
)