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

  // O(n)
  find(value) {
    let curNode = this.head;
    while(curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  // O(1)
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

  // O(n)
  insert(prevNode, newValue) {
    const node = new Node(newValue)
    node.next = prevNode.next;
    prevNode.next = node;
  }

  remove(value) {
    const node = this.find(value)
    console.log(node)
  }

  // O(n)
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