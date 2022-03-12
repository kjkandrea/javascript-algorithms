class Heap {
  constructor () {
    this.values = [null]
  }

  push(value) {
    this.values.push(value)
  }
}

function main() {
  const heap = new Heap()

  heap.push(45)

  console.log(heap.values)
}

main()