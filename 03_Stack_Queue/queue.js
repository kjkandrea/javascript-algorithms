class Queue {
  constructor () {
    this.queue = []
    this.front = 0
    this.rear = 0
  }

  enqueue(value) {
    this.queue[this.rear++] = value
  }

  dequeue() {
    const value = this.queue[this.front]
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.queue)

console.log(queue.dequeue())
console.log(queue.queue)
