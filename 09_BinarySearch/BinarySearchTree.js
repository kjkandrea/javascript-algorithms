class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const node = new Node(value)
    if (this.root === null) {
      this.root = node
      return
    }

    let currentNode = this.root
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = node
          break
        }
        currentNode = currentNode.right
      }

      if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = node
          break
        }
        currentNode = currentNode.left
      }
    }
  }

  has(value) {
    let currentNode = this.root
    while (currentNode !== null) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.value < value ? currentNode.right : currentNode.left;
    }
    return false;
  }
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(4)
tree.insert(6)
tree.insert(7)
tree.insert(3)
console.log(tree.has(5))
console.log(tree.has(7))
console.log(tree.has(999))