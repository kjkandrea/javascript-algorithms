class DirectedGraph {
  constructor () {
    this.edges = {}
  }

  addVertex = vertex => {
    this.edges[vertex] = {}
  }

  addEdge = (orgVertex, destVertex, weight = 0) => {
    this.edges[orgVertex][destVertex] = weight
  }
}

const directedGraph = new DirectedGraph()

directedGraph.addVertex(1)
directedGraph.addVertex(2)
directedGraph.addVertex(3)
directedGraph.addEdge(1, 2, 10)
directedGraph.addEdge(2, 3, 15)

console.log(directedGraph.edges)