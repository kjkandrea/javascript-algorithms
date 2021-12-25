import { Node, SinglyLinkedList } from './generator.js'

const node = new Node('🍰')

console.log(node)

const linkedList = new SinglyLinkedList()
linkedList.append('🍰')
linkedList.append('🍌')
linkedList.append('🍎')
const bananaNode = linkedList.find('🍌');
linkedList.insert(bananaNode, '🍇')
const array = linkedList.toArray()
console.log(array)