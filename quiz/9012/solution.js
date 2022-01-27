import fs from 'fs';

const brackets = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);

function solution (brackets) {
  let matcher = 0;
  for (const char of brackets) {
    if (0 > matcher) return 'NO';
  }
  return matcher === 0 ? 'YES' : 'NO'
}


console.log(
  solution(brackets)
)