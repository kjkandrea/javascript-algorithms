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

  }
}

const trie = new Trie()
console.log(trie)