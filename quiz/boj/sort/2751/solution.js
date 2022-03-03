import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
lines.shift()
const numbers = lines.map(Number)

function solution (numbers) {
  console.log(numbers.sort((a, b) => a - b).join('\n'))
}

solution(numbers)