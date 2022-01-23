// 최단경로 알고리즘 : Dijkstra Algorithm

import { DirectedGraph } from '../DirectedGraph/index.js'

const graph = new DirectedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A', 'B', 10)
console.log(graph.edges)