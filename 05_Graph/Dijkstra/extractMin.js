const extractMin = (queue, dist) => {
  let minimumDist = Infinity
  let nodeWithMinimumDist = null
  Object.keys(queue).forEach(node => {
    if (dist[node] <= minimumDist) {
      minimumDist = dist[node]
      nodeWithMinimumDist = node
    }
  })
  return nodeWithMinimumDist
}

console.log(
  extractMin(
    {
      A: { B: 4, C: 8 },
      B: { C: 1, D: 5 },
      C: { D: 8, E: 10 },
      D: { E: 2, Z: 2 },
      E: { Z: 3 },
      Z: {}
    }
    ,
    {
      A: Infinity,
      B: Infinity,
      C: Infinity,
      D: Infinity,
      E: Infinity,
      Z: Infinity,
    },
  ),
)