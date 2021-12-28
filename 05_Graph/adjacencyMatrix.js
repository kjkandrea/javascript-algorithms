const graph = Array.from(
  Array(5),
  () => Array(5).fill(false)
)

graph[0][1] = true
graph[0][3] = true

console.log(graph)