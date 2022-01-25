import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const [_, currency] = line.splice(0, 1)[0].split(' ').map(Number)
const coins = line.map(Number)

// TODO 시간 초과.. 누산을 계산하는게 문제인듯
function solution(currency, coins) {
  coins = coins.reverse()

  const pocket = [0]
  for (const coin of coins) {
    if (currency >= coin) {
      while(currency >= pocket.reduce((a, b) => a + b, coin)) {
        pocket.push(coin)
      }

      if (pocket.reduce((a, b) => a + b) === currency) break;
    }
  }

  return pocket
}

console.log(
  solution(currency, coins).length - 1
)