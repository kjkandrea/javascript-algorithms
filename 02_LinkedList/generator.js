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
      if (curNode.next === null) return null;
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

  // O(n)
  remove(value) {
    const node = this.find(value)
    if (node === null) return;
    node.next = node.next.next
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