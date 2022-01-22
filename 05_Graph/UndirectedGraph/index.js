/**
 * 네이밍이 겁나게 근사한데 '무지향성 그래프' 라고 부르자.
 *
 * @Vertex : 정점. 그래프를 형성하는 노드이다.
 * @Edge : 간선. 노드간의 연결을 의미한다.
 */
class UndirectedGraph {
  constructor () {
    this.edges = {}
  }

  addVertex = vertex => {
    this.edges[vertex] = {}
  }
}

const undirectedGraph = new UndirectedGraph()
undirectedGraph.addVertex(1)
undirectedGraph.addVertex(2)
console.log(undirectedGraph.edges)