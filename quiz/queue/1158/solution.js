import fs from "fs"

const [n, k] = fs.readFileSync('./input.txt', 'utf8').split(' ').map(Number)

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Circular {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0;
  }

  add (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.tail.next = this.head
    this.size += 1;
  }
}

function generateCircular (n) {
  const circular = new Circular()
  for (let i = 1; i <= n;i += 1) {
    circular.add(i)
  }
  console.log(circular)
  console.log(circular.head.value)
  console.log(circular.tail.value)
}

function solution (n, k) {
  const circular = generateCircular(n)
}

solution(n, k)