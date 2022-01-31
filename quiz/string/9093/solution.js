import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

function solution(lines) {
  console.log(lines)
}

solution(lines)