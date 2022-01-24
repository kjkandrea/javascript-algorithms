// 최단거리 알고리즘 : Dijkstra Algorithm
// TODO: 그럼 최단경로는 어떻게구하냐??

import { DirectedGraph } from '../DirectedGraph/index.js'

class DijkstraDirectedGraph extends DirectedGraph {
  static isEmpty = object => Object.keys(object).length === 0;

  static extractMin = (queue, dist) => {
    let minimumDist = Infinity
    let nodeWithMinimumDist = null
    Object.keys(queue).forEach(node => {
      if (dist[node] <= minimumDist) {
        minimumDist = dist[node]
        nodeWithMinimumDist = node;
      }
    })
    return nodeWithMinimumDist;
  }

  dijkstra = start => {
    const queue = {...this.edges}
    const dist = {}
    Object.keys(this.edges).forEach(vertex => {
      // 목적지의 모든 값 Infinity 로 초기화
      dist[vertex] = Infinity
    })

    dist[start] = 0; // 시작점 => 시작점은 0 이므로

    // 큐가 빌 때까지 실행
    while (!DijkstraDirectedGraph.isEmpty(queue)) {
      const u = DijkstraDirectedGraph.extractMin(queue, dist); // get the min distance

      delete queue[u];

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