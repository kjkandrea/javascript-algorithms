import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').
  trim().
  split('\n').
  splice(1)

class Stack {
  constructor () {
    this.stack = []
  }

  push = payload => this.stack.push(payload)

  pop = () => this.stack.pop() ?? -1

  get size () {
    return this.stack.length
  }

  get empty () {
    return 0 >= this.stack.length ? 1 : 0;
  }

  get top () {
    return this.stack[this.stack.length - 1] ?? -1
  }
}

// Stack. 시간초과남
function solution (lines) {
  const stack = new Stack()

  lines.forEach(line => {
    const [name, payload] = line.split(' ')
    switch (name) {
      // Methods
      case 'push':
        stack.push(Number(payload))
        break
      case 'pop':
        console.log(stack.pop())
        break
      // Getters
      default:
        console.log(stack[name])
        break
    }
  })
}

solution(lines)