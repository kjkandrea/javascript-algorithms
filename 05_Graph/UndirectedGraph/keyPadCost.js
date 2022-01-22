// 휴대폰 키패드를 어느손가락으로 누르면 유리할까 하는 문제

import { UndirectedGraph } from './index.js'

const keyPadGraph = new UndirectedGraph()
keyPadGraph.addVertex(1)
keyPadGraph.addVertex(2)
keyPadGraph.addVertex(3)
keyPadGraph.addVertex(4)
keyPadGraph.addVertex(5)
keyPadGraph.addVertex(6)
keyPadGraph.addVertex(7)
keyPadGraph.addVertex(8)
keyPadGraph.addVertex(9)
keyPadGraph.addVertex(0)
keyPadGraph.addEdge(1, 2, 1)
keyPadGraph.addEdge(2, 3, 1)
keyPadGraph.addEdge(4, 5, 1)
keyPadGraph.addEdge(5, 6, 1)
keyPadGraph.addEdge(7, 8, 1)
keyPadGraph.addEdge(8, 9, 1)
keyPadGraph.addEdge(8, 0, 1)
keyPadGraph.addEdge(1, 4, 1)
keyPadGraph.addEdge(2, 5, 1)
keyPadGraph.addEdge(3, 6, 1)
keyPadGraph.addEdge(4, 7, 1)
keyPadGraph.addEdge(5, 8, 1)
keyPadGraph.addEdge(6, 9, 1)

// TODO: 공부하면서 보강해야함. 어떻게 탐색해야할지 모르겠
UndirectedGraph.prototype.getCost = function (fromVertex, toVertex) {
  const stack = []
  const visited = {}
  let currentVertex = toVertex;
  let cost = 0;
  stack.push(currentVertex)

  while (stack.length) {
    currentVertex = stack.pop()
    if (!visited[currentVertex]) {
      console.log(currentVertex)
      visited[currentVertex] = true
      this.edges?.[currentVertex] && Object.keys(this.edges[currentVertex]).forEach(adjVertex => stack.push(adjVertex))
    }
  }

  return {
    cost
  }
}

keyPadGraph.getCost(1, 0)