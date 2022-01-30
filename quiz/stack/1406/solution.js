import fs from "fs"

const inputs = fs.readFileSync('./input.txt', 'utf8').split('\n')
const [initialValue] = inputs.splice(0, 2)

function solution(initialValue, inputs) {
  const leftStack = initialValue.split('')
  const rightStack = []

  inputs.forEach(input => {
    const [cmd, payload] = input.split(' ')
    if (cmd === 'B') leftStack.pop()
    if (cmd === 'P') leftStack.push(payload)
    if (cmd === 'L') rightStack.push(leftStack.pop())
    if (cmd === 'R') leftStack.push(rightStack.pop())
  })

  console.log(leftStack.join('') + rightStack.reverse().join(''))
}

solution(
  initialValue,
  inputs
)
