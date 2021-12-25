export class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  append(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    }
  }
}