import input from './input.js'

// TODO : https://programmers.co.kr/learn/courses/30/lessons/42860
function solution (name) {
  return undefined
}

console.log(
  input.map((inOut) => {
    const input = solution(inOut[0]);
    const output = inOut[1]
    return input === output;
  }).every(b => b)
)