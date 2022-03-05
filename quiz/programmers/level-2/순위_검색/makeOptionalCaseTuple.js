function makeOptionalCaseTuple (array) {
  const result = []
  const EMPTY_VALUE = null

  array.forEach((value, index, origin) => {
    const rest = origin.slice(index)

    result.push(
      Array(origin.length - rest.length)
        .fill(EMPTY_VALUE)
        .concat(rest)
    )
  })

  result.push((Array(array.length).fill(EMPTY_VALUE))) // 다 없는 경우의 수
  return result

  // 조합 알고리즘 필요
}

const data = ['새빨간', '멋쟁이', '토마토', '나는야', '주스될거야']

console.log(
  makeOptionalCaseTuple(data),
)