import { Node, SinglyLinkedList } from './generator.js'

const node = new Node('🍰')

console.log(node)

const linkedList = new SinglyLinkedList()
linkedList.append('🍰')
linkedList.append('🍌')
linkedList.append('🍎')
const array = linkedList.toArray()
console.log(array)
console.log(linkedList.find('🍌'))