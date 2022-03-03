import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [_, currency] = line.splice(0, 1)[0].split(' ').map(Number)
const coins = line.map(Number)

// Greedy
function solution(currency, coins) {
  coins = coins.reverse()

  let howMany = 0;
  let sum = 0;
  for (const coin of coins) {
    if (currency >= coin) {
      while(currency >= (sum + coin)) {
        sum += coin
        howMany += 1
      }

      if (sum === currency) break;
    }
  }

  return howMany
}

console.log(
  solution(currency, coins)
)