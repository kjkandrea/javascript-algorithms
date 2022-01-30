import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const messages = lines.map(line => {
  const [left, right] = line.split(' ')
  return right ? [left, Number(right)] : [left, null]
})

class Stack {
  constructor () {
    console.log('hello')
  }
}

function solution(messages) {
  console.log(messages)
}

solution(messages)