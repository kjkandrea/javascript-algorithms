import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const peoples = line[1].split(' ').map(Number)

// TODO: 문제 이해를 잘못한듯?
function solution(peoples) {
  let prev = 0;
  let total = 0;
  for (const people of peoples) {
    prev += people
    total += prev
  }
  return total
}

console.log(
  solution(peoples)
)