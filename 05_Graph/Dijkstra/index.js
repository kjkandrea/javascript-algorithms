// 최단경로 알고리즘 : Dijkstra Algorithm

import { DirectedGraph } from '../DirectedGraph/index.js'

class DijkstraDirectedGraph extends DirectedGraph {
  dijkstra = () => {
    this.edges && Object.keys(this.edges).forEach(vertex => {
      console.log(vertex)
    })
  }
}

const graph = new DijkstraDirectedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('Z')
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 8)
graph.addEdge('B', 'C', 1)
graph.addEdge('B', 'D', 5)
graph.addEdge('C', 'D', 8)
graph.addEdge('C', 'E', 10)
graph.addEdge('D', 'E', 2)
graph.addEdge('D', 'Z', 2)
graph.addEdge('E', 'Z', 2)
console.log(graph.dijkstra())