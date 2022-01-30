import fs from "fs"

const inputs = fs.readFileSync('./input.txt', 'utf8').split('\n')
const [initialValue] = inputs.splice(0, 2)

// 시간 초과
function solution(initialValue, inputs) {
  const stringArray = initialValue.split('')
  let cursor = stringArray.length - 1

  inputs.forEach(input => {
    if (input.startsWith('P')) {
      const [_, payload] = input.split(' ')
      cursor += 1
      stringArray.splice(cursor, 0, payload)
      return;
    }

    if (input.startsWith('B')) {
      if (stringArray[cursor]) {
        stringArray.splice(cursor, 1)
        if (cursor !== -1) cursor -= 1
      }
      return;
    }

    if (input === 'D' && stringArray.length - 1 > cursor) cursor += 1
    if (input === 'L' && cursor > -1) cursor -= 1
  })

  console.log(stringArray.join(''))
}

solution(
  initialValue,
  inputs
)
