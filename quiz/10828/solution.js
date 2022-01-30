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

  push = payload => ['push', payload]

  pop = () => 'pop'

  get size () {
    return 'size'
  }

  get empty () {
    return 'empty'
  }

  get top () {
    return 'top'
  }
}

function solution (messages) {
  const stack = new Stack()

  messages.forEach(([name, payload]) => {
    switch (name) {
      case 'push':
        stack.push(payload)
        break
      case 'pop':
        console.log(stack.pop())
        break
      default:
        console.log(stack[name])
        break
    }
  })
}

solution(messages)