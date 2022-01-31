import fs from 'fs'

const range = Number(fs.readFileSync('./input.txt', 'utf8'))

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
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
  }

  dequeue () {
    const value = this.head.value
    this.head = this.head.next
    return value
  }
}

function generateQueue (range) {
  const queue = new Queue()

  for (let i = 1; i < range; i += 1) {
    queue.enqueue(i)
  }

  return queue;
}

function solution (range) {
  const queue = generateQueue(range)
  console.log(queue)
}

solution(range)