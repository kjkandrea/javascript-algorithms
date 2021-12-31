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

  insert(value) {
    const node = new Node(value)
    if (this.root === null) {
      this.root = node;
      return;
    }

    let currentNode = this.root;
    if (currentNode.value < value) {
      currentNode.right = node
    } else {
      currentNode.left = node
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(4)
tree.insert(6)
console.log(tree)