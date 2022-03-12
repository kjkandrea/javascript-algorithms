class Heap {
  constructor () {
    this.values = [null]
  }

  push(value) {
    this.values.push(value)

    const curIdx = this.values.length - 1
    const parIdx = Math.floor(curIdx / 2)

    console.log('curIdx : ', curIdx)
    console.log('parIdx : ', parIdx)
  }
}

function main() {
  const heap = new Heap()

  heap.push(45)
  heap.push(44)

  console.log(heap.values)
}

main()