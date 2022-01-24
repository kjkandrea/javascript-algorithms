// 최단거리 알고리즘 : Dijkstra Algorithm
// TODO: 그럼 최단경로는 어떻게구하냐??

import { DirectedGraph } from '../DirectedGraph/index.js'

class DijkstraDirectedGraph extends DirectedGraph {
  static isEmpty = object => Object.keys(object).length === 0;

  static extractMin = (Q, dist) => {
    let minimumDist = Infinity
    let nodeWithMinimumDist = null
    Object.keys(Q).forEach(node => {
      if (dist[node] <= minimumDist) {
        minimumDist = dist[node]
        nodeWithMinimumDist = node;
      }
    })
    return nodeWithMinimumDist;
  }

  dijkstra = start => {
    const Q = {}
    const dist = {}
    this.edges && Object.keys(this.edges).forEach(vertex => {
      dist[vertex] = Infinity
      Q[vertex] = this.edges[vertex]
    })

    dist[start] = 0;

    while (!DijkstraDirectedGraph.isEmpty(Q)) {
      const u = DijkstraDirectedGraph.extractMin(Q, dist); // get the min distance

      delete Q[u];

      Object.keys(this.edges[u]).forEach(neighbor => {
        let alt = dist[u] + this.edges[u][neighbor]
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt;
        }
      })
    }
    return dist;
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
graph.addEdge('E', 'Z', 3)
console.log(graph.dijkstra('A')) // 출발점을 인자로