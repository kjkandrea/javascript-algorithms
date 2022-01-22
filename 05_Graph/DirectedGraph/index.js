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

  removeEdge = (orgVertex, destVertex) => {
    if (this.edges[orgVertex]?.[destVertex]) {
      delete this.edges[orgVertex][destVertex]
    }
  }

  removeVertex = vertex => {
    Object.keys(this.edges[vertex]).forEach(adjacentVertex => {
      this.removeEdge(adjacentVertex, vertex)
    })
    delete this.edges[vertex]
  }
}

const directedGraph = new DirectedGraph()

directedGraph.addVertex(1)
directedGraph.addVertex(2)
directedGraph.addVertex(3)
directedGraph.addVertex(4)
directedGraph.addEdge(1, 2, 10)
directedGraph.addEdge(2, 3, 15)
directedGraph.addEdge(3, 4, 15)
directedGraph.removeEdge(3, 4)
directedGraph.removeVertex(3)

console.log(directedGraph.edges)