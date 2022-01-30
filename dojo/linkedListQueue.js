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
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  dequeue() {
    const value = this.head.value
    this.head = this.head.next;
    return value;
  }
}

function main () {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(2)
  // console.log(queue.dequeue())
  //console.log(queue.dequeue())
  console.log(queue)
}

main()