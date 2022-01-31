import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()

function reverse (word) {
  let newWord = ''

  for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i]
  }

  return newWord;
}

function solution (lines) {
  let newLines = []
  for (const line of lines) {
    const reversedLine = line.split(' ').map(word => {
      return reverse(word)
    }).join(' ')
    newLines.push(reversedLine)
  }
  return newLines.join('\n');
}

console.log(
solution(lines)
)