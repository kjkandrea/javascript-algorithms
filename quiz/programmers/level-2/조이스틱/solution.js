import input from './input.js'

// TODO
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