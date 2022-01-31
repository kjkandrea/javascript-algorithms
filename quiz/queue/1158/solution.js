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

  push (value) {
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

  pop (value) {
    let node = this.head
    while(node.value !== value) {
      node = node.next
    }

    node.value = node.next.value
    node.next = node.next.next
    this.size -= 1;

    return value
  }
}

function generateCircular (n) {
  const circular = new Circular()
  for (let i = 1; i <= n;i += 1) {
    circular.push(i)
  }
  return circular
}

function solution (n, k) {
  const circular = generateCircular(n)
  console.log(circular.pop(2))
  console.log(circular)
}

solution(n, k)