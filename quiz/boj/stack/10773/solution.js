import fs from 'fs';

const numbers = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').map(Number).splice(1);

// Stack
function solution(numbers) {
  return numbers.reduce((stack, num) => {
    num === 0 ? stack.pop() : stack.push(num)
    return stack;
  }, []).concat([0]).reduce((a, b) => a + b)
}

console.log(
  solution(numbers)
)