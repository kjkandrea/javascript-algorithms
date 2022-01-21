// 피보나치 수열
// 1 1 2 3 5 8 13
function fibonacci(x) {
  if (2 >= x) {
    return 1
  }
  return fibonacci(x - 1) + fibonacci(x - 2)
}

console.log(
  fibonacci(7) // 5 + 8
)

const mergesort = arr => {
  if (1 >= arr.length) return arr;

  const mid = Math.floor(arr.length / 2)
  return [mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid))]
}

console.log(
  JSON.stringify(mergesort([21, 10, 12, 20, 25, 13, 15, 22]))
)