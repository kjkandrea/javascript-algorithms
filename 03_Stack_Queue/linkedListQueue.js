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
    this.size = this.size + 1
  }

  dequeue () {
    const value = this.head.value
    this.head = this.head.next
    this.size = this.size - 1;
    return value;
  }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
