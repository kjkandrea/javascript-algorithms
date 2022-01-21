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