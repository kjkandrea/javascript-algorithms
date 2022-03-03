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
    this.size = 0
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
    this.size += 1
  }

  dequeue () {
    const value = this.head.value
    this.head = this.head.next
    this.size -= 1
    return value
  }

  get peek () {
    return this.head?.value
  }
}

class PrintQueue extends Queue {
  isMax (value) {
    const { priority } = value

    let currentNode = this.head
    while (currentNode.next) {
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
      is,
    })
  })
  return printQueue
}

function solution (priorities, location) {
  const printQueue = generatePrintQueue(priorities, location)

  let count = 1
  while (true) {
    let isMax = printQueue.isMax(printQueue.peek)
    if (isMax) {
      if (printQueue.peek.is) {
        return count
      }
      printQueue.dequeue()
      count += 1
    }
    else {
      const node = printQueue.dequeue()
      printQueue.enqueue(node)
    }
  }
}

const result = [
  solution([2, 1, 3, 2], 2),
  solution([1, 1, 9, 1, 1, 1], 0),
]

const correct = [1, 5]

const pass = result.every((v, i) => v === correct[i])

console.log(pass)