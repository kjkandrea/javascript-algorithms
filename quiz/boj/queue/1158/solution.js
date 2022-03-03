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
    this.prevPop = null
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

  kill (step) {
    let node = this.prevPop ?? this.head
    while(step !== 1) {
      node = node.next
      step -= 1;
    }

    const value = node.value;

    // kill this node.
    node.value = node.next.value
    node.next = node.next.next
    this.prevPop = node
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
  const corps = [] // 요세푸스의 대원들이 죽은 순서
  const circular = generateCircular(n)

  while (circular.size) { // 모든 대원이 죽을 때 까지
    corps.push(circular.kill(k)) // 이전에 죽은 대원의 k 번째 대원이 죽는다.
  }

  console.log(`<${corps.join(', ')}>`)
}

solution(n, k)