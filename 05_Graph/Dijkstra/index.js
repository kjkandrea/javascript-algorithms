// 최단거리 알고리즘 : Dijkstra Algorithm
// TODO: 그럼 최단경로는 어떻게구하냐??

import { DirectedGraph } from '../DirectedGraph/index.js'

class DijkstraDirectedGraph extends DirectedGraph {
  static _isEmpty = object => Object.keys(object).length === 0;

  dijkstra = source => {
    const Q = {}
    const dist = {}

    this.edges && Object.keys(this.edges).forEach(vertex => {
      dist[vertex] = Infinity
      Q[vertex] = this.edges[vertex]
    })

    dist[source] = 0;

    while (!DijkstraDirectedGraph._isEmpty(Q)) {
      const u = Object.keys(Q)[0]

      console.log(u)

      delete Q[u]
    }
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
graph.dijkstra('Z')