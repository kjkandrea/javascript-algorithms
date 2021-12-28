class MaxHeap {
  constructor () {
    this.heap = [null]
  }

  push(value) {
    this.heap.push(value)
    const currentIndex = this.heap.length - 1
    const parentIndex = Math.floor(currentIndex / 2)
    console.log('currentIndex : %s', currentIndex)
    console.log('parentIndex : %s', parentIndex)

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      console.log('while')
    }
  }
}

const heap = new MaxHeap()
heap.push(45)

console.log(heap)