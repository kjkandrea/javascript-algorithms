import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);

// Stack
function solution (brackets) {
  let matcher = 0;
  for (const char of brackets) {
    if (0 > matcher) return 'NO';
    if (char === '(') matcher += 1
    if (char === ')') matcher -= 1
  }
  return matcher === 0 ? 'YES' : 'NO'
}

lines.forEach(brackets => console.log(solution(brackets)))