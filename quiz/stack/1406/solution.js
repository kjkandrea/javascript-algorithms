import fs from "fs"

const inputs = fs.readFileSync('./input.txt', 'utf8').split('\n')
const [initialValue] = inputs.splice(0, 2)

/**
 * TODO: 시간 초과
 *
 * 1) 배열의 맨 끝에서만 삽입 또는 삭제 연산을 수행하도록 설계하기
 * 2) 임의의 위치에 원소를 삽입하거나 삭제하는 연산을 O(1) 에 수행할 수 있는 자료구조 사용하기
 **/
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
