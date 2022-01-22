class DirectedGraph {
  constructor () {
    this.edges = {}
  }

  addVertex = vertex => {
    this.edges[vertex] = {}
  }
}

const directedGraph = new DirectedGraph()

directedGraph.addVertex(1)
directedGraph.addVertex(2)
directedGraph.addVertex(3)

console.log(directedGraph.edges)