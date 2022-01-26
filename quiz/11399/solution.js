import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');
const peoples = line[1].split(' ').map(Number)

function solution(peoples) {
  console.log(peoples)
}

console.log(
  solution(peoples)
)