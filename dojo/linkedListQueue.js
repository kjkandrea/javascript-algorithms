class Node {
  constructor (value) {
    this.value  = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  dequeue() {
    if (!this.head) return undefined;
    const value = this.head.value
    this.head = this.head.next
    return value
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(
  queue.dequeue(),
  queue.dequeue(),
  queue.dequeue(),
)
