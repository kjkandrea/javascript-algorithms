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
      // 순서 중요
      this.tail.next = node // 기존 꼬리의 꼬리를 하나 더 추가하고
      this.tail = node // 추가된 노드가 꼬리가 된다.
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

console.log(queue)

queue.enqueue(2)

console.log(queue)

queue.enqueue(3)

console.log(queue)

console.log(
  queue.dequeue(),
  queue.dequeue(),
  queue.dequeue(),
)
