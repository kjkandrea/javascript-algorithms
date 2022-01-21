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
  return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)))

  function merge (a, b) {
    if (a.length === 0) return b;
    if (b.length === 0) return a;

    return a[0] < b[0]
      ? [a[0], ...merge(a.slice(1), b)]
      : [b[0], ...merge(a, b.slice(1))]

  }
}

console.log(
  mergesort([21, 10, 12, 20, 25, 13, 15, 22])
)