import fs from "fs"

const [n, k] = fs.readFileSync('./input.txt', 'utf8').split(' ').map(Number)

function solution (n, k) {
  const result = []

  let acc = 0;

  // 빠진 수를 생각 안하니 정답이 이상하게나옴. linked list 로 푸는게 가장 깔끔할거같은데...
  while (n > result.length) {
    const value = n > k + acc ? k + acc : (k + acc) - n

      result.push(value)
      acc = value
  }
  console.log(result)
}

solution(n, k)