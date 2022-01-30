import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')

function balanceJudgment(line) {
  const brackets = line.replace(/[^()\[\]]/g, '')
  if (!brackets) return 'yes'

  const stack = []
  for (const bracket of brackets) {
    if (bracket === '(' || bracket === '[') {
      stack.push(bracket)
    }
    if (bracket === ')') {
      if (stack[stack.length -1] === '(') {
        stack.pop()
      } else {
        return 'no'
      }
    }

    if (bracket === ']') {
      if (stack[stack.length -1] === '[') {
        stack.pop()
      } else {
        return 'no'
      }
    }
  }

  return 'yes'

}

// Stack
function solution (lines) {
  let output = []
  for (const line of lines) {
    if (line === '.') {
      console.log(output.join('\n'))
      break;
    }

    output.push(balanceJudgment(line))
  }
}

solution(lines)