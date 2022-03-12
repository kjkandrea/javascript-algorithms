import input from './input.js'

class SimpleHeap {
  constructor () {
    this.values = []
  }

  hipify () {
    this.values.sort((a, b) => a - b)
  }

  push(value) {
    this.values.push(value)
    this.hipify()
  }

  pop = () => this.values.pop()

  shift = () => this.values.shift()
}

function solution(operations) {
  const heap = new SimpleHeap()

  operations.forEach(oper => {
    const [cmd, num] = oper.split(' ')

    if (cmd === 'I') heap.push(Number(num))
    else if (oper === 'D 1') heap.pop()
    else if (oper === 'D -1') heap.shift()
  })

  if (heap.values.length === 0) return [0, 0]
  return [heap.values[heap.values.length - 1], heap.values[0]]
}

console.log(
  input.map((inOut) => {
    const input = solution(inOut[0]);
    const output = inOut[1]
    return input.join() === output.join();
  }).every(b => b)
)