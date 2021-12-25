import { SinglyLinkedList } from './generator.js'

const linkedList = new SinglyLinkedList()
linkedList.append('🍰') // O(1)
linkedList.append('🍌') // O(1)
linkedList.append('🍎') // O(1)
const bananaNode = linkedList.find('🍌'); // O(n)
linkedList.insert(bananaNode, '🍇') // O(1)
linkedList.remove('🍌') // O(n)
const array = linkedList.toArray() // O(1)
console.log(array)
