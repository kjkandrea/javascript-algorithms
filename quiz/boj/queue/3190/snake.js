class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0;
  }

  static getNode(value) {
    return {
      value,
      next: null
    }
  }

  enqueue(value) {
    const node = Snake.getNode(value)
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  dequeue() {
    if (!this.head) return undefined;
    const value = this.head.value
    this.head = this.head.next
    this.size -= 1;
    return value
  }
}

class Snake extends Queue {
  constructor (maxSize = 1) {
    super();
    this.maxSize = maxSize
  }

  move (value) {
    if (this.maxSize > this.size) {
      super.enqueue(value)
    } else {
      this.dequeue()
      super.enqueue(value)
    }
  }
}

const snake = new Snake()

snake.move(1)
snake.move(2)
snake.move(3)
snake.maxSize = 3;
snake.move(4)
snake.move(5)
snake.move(6)
snake.move(7)
snake.move(8)
console.log(snake)
