// linked list node
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

  enqueue(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.tail = node
      this.head = this.tail
    }
  }
}

function main () {
  const queue = new Queue()
  queue.enqueue(1)
  console.log(queue)
}

main()