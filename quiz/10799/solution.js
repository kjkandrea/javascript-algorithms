import fs from 'fs';

const bars = fs.readFileSync('./input.txt', 'utf8').trim()

// TODO: fail
function solution(bars) {
  let stack = 0;
  let count = 0;

  const raiserBars = bars.replaceAll('()', '|')
  return raiserBars;
}

console.log(
  solution(bars)
)