import fs from 'fs';

const bars = fs.readFileSync('./input.txt', 'utf8').trim()

function solution(bars) {
  return bars;
}

console.log(
  solution(bars)
)