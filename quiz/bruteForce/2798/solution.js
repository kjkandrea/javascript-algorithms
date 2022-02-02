import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
const n = Number(lines[0].split(' ')[1])
const cards = lines[1].split(' ').map(Number)

function solution(n, cards) {
  console.log(n, cards)
}

solution(n, cards)