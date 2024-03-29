import { DirectedGraph } from '../DirectedGraph/index.js'

class BFSDirectedGraph extends DirectedGraph {
  traversDFS = (vertex, fn) => {
    this._traverseDFS(vertex, {}, fn)
  }

  _traverseDFS = (vertex, visited, fn) => {
    visited[vertex] = true
    fn(vertex)
    // vertex 깊이 탐색이 끝나면 다음 adjacentVertex 기준으로 이웃 vertex 탐색
    this.edges?.[vertex] && Object.keys(this.edges[vertex]).forEach(adjacentVertex => {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited, fn)
      }
    })
  }
}

const directedGraph = new BFSDirectedGraph()
directedGraph.addVertex('A')
directedGraph.addVertex('B')
directedGraph.addVertex('C')
directedGraph.addVertex('D')
directedGraph.addVertex('E')
directedGraph.addVertex('F')
directedGraph.addVertex('G')
directedGraph.addVertex('H')
directedGraph.addVertex('I')
directedGraph.addEdge('A', 'B', 1)
directedGraph.addEdge('B', 'C', 1)
directedGraph.addEdge('B', 'E', 1)
directedGraph.addEdge('C', 'D', 1)
directedGraph.addEdge('D', 'G', 1)
directedGraph.addEdge('D', 'F', 1)
directedGraph.addEdge('G', 'H', 1)
directedGraph.addEdge('F', 'J', 1)
directedGraph.traversDFS('B', console.log)