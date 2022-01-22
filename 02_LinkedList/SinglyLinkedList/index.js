// [1,2,3,4]

class SinglyLinkedListNode {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  insert = value => {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value)
    }
    else {
      const temp = this.head
      this.head = new SinglyLinkedListNode(value)
      this.head.next = temp
    }
  }

  isEmpty = () => this.size === 0

  // 이건 내맘대로 만듬
  print = () => {
    const reverseList = []
    if (!this.head.data) {
      return ''
    }

    reverseList.push(this.head.data)

    let nextNode = this.head.next
    while (true) {
      if (nextNode !== null) {
        reverseList.push(nextNode.data)
        nextNode = nextNode.next
      } else {
        console.log('tick')
        return reverseList.reverse().join(' => ')
      }
    }
  }
}

const singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.insert(1)
singlyLinkedList.insert(2)
singlyLinkedList.insert(3)

console.log(
  singlyLinkedList.print()
)