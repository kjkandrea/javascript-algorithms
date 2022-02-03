import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
const n = Number(lines[0])

function solution(n) {
  console.log(n)
}

solution(n)