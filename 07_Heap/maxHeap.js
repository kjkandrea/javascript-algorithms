class MaxHeap {
  constructor () {
    this.heap = [null]
  }

  push(value) {
    this.heap.push(value)
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor(currentIndex / 2)

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      console.log('sort')

      const temp = this.heap[parentIndex]
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex =parentIndex;
      parentIndex = Math.floor(currentIndex / 2)
    }
  }
}

const heap = new MaxHeap()
heap.push(45)
heap.push(36)
heap.push(54)
heap.push(27)
heap.push(63)

console.log(heap)