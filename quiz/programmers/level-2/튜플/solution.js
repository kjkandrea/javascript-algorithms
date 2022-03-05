import input from './input.js'

function solution(s) {
  const setten = new Set()
  const args = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(({ length: a }, { length: b }) => a - b).flat()
  args.forEach(arg => setten.add(arg))
  return [...setten]
}

console.log(
  input.map((inOut) => {
    const input = solution(inOut[0]);
    const output = inOut[1]
    const result =input.join() === output.join();
    console.log(input, output, result)
    return result;
  }).every(b => b)
)