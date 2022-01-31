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
    this.size = 0;
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    }
    else {
      this.tail.next = node
    }
    this.tail = node
    this.size += 1;
  }

  dequeue () {
    const value = this.head.value
    this.head = this.head.next
    this.size -= 1;
    return value
  }

  get peek () {
    return this?.head.value
  }
}

// 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
function shuffle (queue) {
  while (queue.size !== 1) {
    queue.dequeue()
    queue.enqueue(queue.dequeue())
  }
  return queue
}

function generateQueue (range) {
  const queue = new Queue()

  for (let i = 1; i <= range; i += 1) {
    queue.enqueue(i)
  }

  return queue;
}

function solution (range) {
  const queue = generateQueue(range)
  console.log(shuffle(queue).peek)
}

solution(range)