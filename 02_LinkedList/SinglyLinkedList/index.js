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
    this.size += 1
  }

  remove = value => {
    let currentNode = this.head
    if (currentNode.data === value) {
      this.head = currentNode.next
      this.size -= 1
      return
    }

    let prevNode = currentNode
    while (currentNode.next) {
      if (currentNode.data === value) {
        // 해당 노드를 건너뛰어 삭제한다.
        prevNode.next = currentNode.next
        break
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
    // 루프 다돌았는데 못찾음. 꼬리에 있을 경우
    if (currentNode.data === value) {
      prevNode.next = null
    }
    this.size -= 1
  }

  has = value => {
    let currentNode = this.head
    while (true) {
      if (currentNode === null) {
        return false
      }

      if (currentNode.data === value) {
        return true
      } else {
        currentNode = currentNode.next
      }

    }
  }

  isEmpty = () => this.size === 0

  // 이건 내맘대로 만듬
  print = () => {
    if (!this.head.data) {
      return ''
    }

    const reverseList = []
    reverseList.push(this.head.data)
    let nextNode = this.head.next
    while (true) {
      if (nextNode === null) {
        return reverseList.reverse().join(' => ')
      }
      reverseList.push(nextNode.data)
      nextNode = nextNode.next
    }
  }
}

const singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.insert(1)
singlyLinkedList.insert(2)
singlyLinkedList.insert(3)
singlyLinkedList.remove(1)

console.log(
  singlyLinkedList.print(),
  ` size: ${singlyLinkedList.size}`,
  singlyLinkedList.has(1),
  singlyLinkedList.has(2),
  singlyLinkedList.has(3),
)