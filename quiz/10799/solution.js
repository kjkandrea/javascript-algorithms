import fs from 'fs';

const bars = fs.readFileSync('./input.txt', 'utf8').trim()

// TODO: fail
function solution(bars) {
  let count = 0;
  bars.split('').reduce((prev, cur) => {
    if (prev === cur) {
      count += 1
    }

    if (prev === '(' && cur === ')') {
      count += 1
    }

    prev = cur;
    return prev;
  }, null)

  return count;
}

console.log(
  solution(bars)
)