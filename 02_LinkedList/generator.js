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
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  toArray() {
    const array = [];
    let curNode = this.head;
    while (curNode !== null) {
      array.push(curNode.value)
      curNode = curNode.next;
    }
    return array;
  }
}