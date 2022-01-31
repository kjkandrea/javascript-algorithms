import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

function reverse (word) {
  let newWord = ''

  for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i]
  }

  return newWord;
}

function solution (lines) {
  console.log(lines)
}

// solution(lines)
console.log(
reverse('pizza')
)