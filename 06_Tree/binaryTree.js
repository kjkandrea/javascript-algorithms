class Node {
  constructor (value) {
    this.value = value;
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor (node) {
    this.root = node
  }
}

const tree = new Tree(new Node(9))
console.log(tree)