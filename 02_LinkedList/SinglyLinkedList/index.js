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
    }
  }
  isEmpty = () => this.size === 0
}

const singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.insert(1)
console.log(singlyLinkedList)