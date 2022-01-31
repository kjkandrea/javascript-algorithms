import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0;
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size += 1
  }

  dequeue () {
    if (!this.head) return -1
    const value = this.head.value
    this.head = this.head.next
    this.size -= 1
    return value;
  }

  get start () {
    if (!this.head) return -1
    return this.head.value
  }

  get end () {
    if (!this.tail) return -1
    return this.tail.value
  }

  get isEmpty () {
    return this.head ? 0 : 1
  }
}

function execute (queue, command) {
  const { name, payload } = command
  switch (name) {
    case 'push':
      return queue.enqueue(payload)
    case 'pop':
      return queue.dequeue()
    case 'front':
      return queue.start
    case 'back':
      return queue.end
    case 'empty':
      return queue.isEmpty
    case 'size':
      return queue.size
  }
}

function solution (lines) {
  const commands = lines.map(line => {
    const [name, payload] = line.split(' ')
    return {
      name,
      payload: payload ? Number(payload) : null,
    }
  })

  const queue = new Queue()

  const prints = []
  commands.forEach(command => {
    const result = execute(queue, command)
    if (result !== undefined) prints.push(result)
  })
  return prints
}

console.log(
solution(lines).join('\n')
)