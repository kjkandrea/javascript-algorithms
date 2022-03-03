import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

function balanceJudgment(line) {
  const stack = []
  for (const bracket of line) {
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

  return stack.length === 0 ? 'yes' : 'no'

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