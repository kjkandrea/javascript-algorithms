export class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 실용성이 있을까?
 * @find O(n) : 노드간의 관계가 링크로만 저장되기 때문에 중간의 한 노드를 찾으려면 순회해 보는 것만이 유일한 방법.
 * @insert O(1) : 매우 빠름
 * @remove O(n) : 이건 내가 구현을 잘못한건가? value 를 찾으려면 find 가 필요하다. 최악.
 *
 * 이걸 어따써야하나?????
 */
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