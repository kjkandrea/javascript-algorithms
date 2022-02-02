import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
const n = Number(lines[0].split(' ')[1])
const cards = lines[1].split(' ').map(Number)

function solution(n, cards) {
  let near = 0;

  for (let i = 0; i < cards.length; i += 1) {
    for (let j = i + 1; j < cards.length; j += 1) {
      for (let k = j + 1; k < cards.length; k += 1) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum === n) return n
        if (sum > n) continue;
        if (Math.abs(near - n) > Math.abs(sum - n)) near = sum
      }
    }
  }

  return near;
}

console.log(
solution(n, cards)
)