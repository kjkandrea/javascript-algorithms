import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').
  toString().
  trim().
  split('\n')
lines.shift()
const peoples = lines.map(line => line.split(' ').map(Number))

// Fail : https://dpsc615.tistory.com/123 요거 보고 브루트포스 감을 익히자 ㅠㅠ
function solution (peoples) {
  const priorities = peoples.map(([w, h], index) => [
    peoples.filter(([weight]) => w > weight).length
    + peoples.filter(([_, height]) => h > height).length,
    index
  ])
  .sort(([a], [b]) => b - a)

  let before = null;
  let currentRank = 1;
  let acc = 0;
  const scores = priorities.map(([p, i]) => {
    if (before === null) {
      before = p
    }

    if (before > p) {
      before = p
      currentRank += acc
      acc = 0;
    }

    if (before === p) {
      acc += 1
    }

    return [currentRank, i]
  })
  .sort(([_, a], [__, b]) => a - b)
  .map(([rank]) => rank)

  console.log(scores.join(' '))
}

solution(peoples)