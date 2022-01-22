// [1,2,3,4]

class SinglyLinkedListNode {
  constructor (data) {
    this.data = data;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.size = 0;
  }
  isEmpty = () => this.size === 0
}