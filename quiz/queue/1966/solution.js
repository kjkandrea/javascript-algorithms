import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()
const questions = lines.map((line, i) => {
  const buffer = line.split(' ').map(Number)
  const even = i % 2 === 0
  return even ? buffer[1] : buffer
}).reduce((acc, cur, i, buffer) => {
  if (typeof cur === 'number') {
    acc.push({
      location: cur,
      priorities: buffer[i + 1],
    })
  }
  return acc
}, [])

console.log(questions)