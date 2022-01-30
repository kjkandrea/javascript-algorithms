import fs from "fs"

const inputs = fs.readFileSync('./input.txt', 'utf8').split('\n')
const [initialValue] = inputs.splice(0, 2)

function solution(initialValue, inputs) {
  const stringArray = initialValue.split('')
  let cursor = stringArray.length - 1

  console.log(stringArray)
  console.log(cursor)
}

solution(
  initialValue,
  inputs
)
