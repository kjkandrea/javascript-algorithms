class Stack {
  constructor () {
    this.data = [];
  }

  push (value) {
    this.data.push(value)
  }

  pop () {
    return this.data.pop()
  }
}

const stack = new Stack()
stack.push('🍎')
stack.push('🍇')
stack.push('🍉')
const item = stack.pop()
console.log(item)