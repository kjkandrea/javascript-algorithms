class Node {
  constructor (value = "") {
    this.value = value
    this.children = new Map();
  }
}

class Trie {
  constructor () {
    this.root = new Node()
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char)
        )
      }
    }
  }
}

const trie = new Trie()
trie.insert('cat')
console.log(trie)