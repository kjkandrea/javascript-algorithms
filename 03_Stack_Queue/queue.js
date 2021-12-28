class Queue {
  constructor () {
    this.queue = []
    this.front = null
    this.rear = null
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