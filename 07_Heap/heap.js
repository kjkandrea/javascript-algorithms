class Heap {
  constructor () {
    this.values = [null]
  }

  push(value) {
    this.values.push(value)

    let current = this.values.length - 1
    let parent = Math.floor(current / 2)

    while (parent !== 0 && this.values[parent] < value) {
      const temp = this.values[parent]
      this.values[parent] = value
      this.values[current] = temp

      current = parent
      parent = Math.floor(current / 2)
    }
  }
}

function main() {
  const heap = new Heap()

  heap.push(45)
  heap.push(44)
  heap.push(46)

  console.log(heap.values)
}

main()