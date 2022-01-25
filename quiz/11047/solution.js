import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [_, currency] = line.splice(0, 1)[0].split(' ').map(Number)
const coins = line.map(Number)

function solution(currency, coins) {
  console.log(currency)
  console.log(coins)
}

console.log(
  solution(currency, coins)
)