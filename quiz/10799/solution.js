import fs from 'fs';

const bars = fs.readFileSync('./input.txt', 'utf8').trim()

function solution(bars) {
  let stack = 0;
  let count = 0;

  const raiserBars = bars.replaceAll('()', '|')
  for (const char of raiserBars) {
    if (char === '(') stack += 1
    if (char === ')') {
      stack -= 1
      count += 1
    }
    if (char === '|') count += stack
  }
  return count;
}

console.log(
  solution(bars)
)