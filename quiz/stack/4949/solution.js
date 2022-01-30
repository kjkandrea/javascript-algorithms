import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')

function balanceJudgment() {
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