class Heap {
  constructor () {
    this.values = [null]
  }

  push(value) {
    this.values.push(value)

    let curIdx = this.values.length - 1
    let parIdx = Math.floor(curIdx / 2)

    while (parIdx !== 0  && this.values[parIdx] < value) {
      const temp = this.values[parIdx]
      this.values[parIdx] = value
      this.values[curIdx] = temp

      curIdx = parIdx
      parIdx = Math.floor(curIdx / 2)
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