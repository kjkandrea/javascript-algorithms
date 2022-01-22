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
  insert = value => {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value)
    } else {
      const temp = this.head;
      this.head = new SinglyLinkedListNode(value)
      this.head.next = temp;
    }
  }
  isEmpty = () => this.size === 0
}

const singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.insert(1)
singlyLinkedList.insert(2)
console.log(singlyLinkedList)