import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').
  trim().
  split('\n').
  splice(1)
const messages = lines.map(line => {
  const [left, right] = line.split(' ')
  return right ? [left, Number(right)] : [left, null]
})

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

function solution (messages) {
  const stack = new Stack()

  messages.forEach(([name, payload]) => {
    switch (name) {
      // Methods
      case 'push':
        stack.push(payload)
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

solution(messages)