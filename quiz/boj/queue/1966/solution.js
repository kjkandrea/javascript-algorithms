import fs from 'fs'

const lines = fs.readFileSync('./printerqueue.in', 'utf8').split('\n')
lines.shift()
const questions = lines.map((line, i) => {
  const buffer = line.split(' ').map(Number)
  const even = i % 2 === 0
  return even ? buffer[1] : buffer
}).reduce((acc, cur, i, buffer) => {
  if (typeof cur === 'number') {
    acc.push({
      location: cur,
      priorities: buffer[i + 1],
    })
  }
  return acc
}, [])

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  dequeue () {
    const value = this.head.value
    this.head = this.head.next
    return value
  }

  get peek () {
    return this.head.value
  }
}

class PrintQueue extends Queue {
  isMax(value) {
    const { priority } = value

    let currentNode = this.head
    while(currentNode.next) {
      if (currentNode.value.priority > priority) {
        return false
      }
      currentNode = currentNode.next
    }
    return true
  }
}

function generatePrintQueue (priorities, location) {
  const printQueue = new PrintQueue()
  priorities.forEach((p, i) => {
    const is = i === location

    printQueue.enqueue({
      priority: p,
      is
    })
  })
  return printQueue;
}


function solution(priorities, location) {
  const printQueue = generatePrintQueue(priorities, location)

  let count = 1;
  while (true) {
    let isMax = printQueue.isMax(printQueue.peek)
    if (isMax) {
      if (printQueue.peek.is) {
        return count
      }
      printQueue.dequeue()
      count += 1;
    } else {
      const node = printQueue.dequeue()
      printQueue.enqueue(node)
    }
  }
}

function main(questions) {
  const result = questions.map(({ priorities, location }) => solution(priorities, location))

  const out = fs.readFileSync('./printerqueue.out', 'utf8').trim()
  console.log(result.join('\n').trim() === out)

}

main(questions)