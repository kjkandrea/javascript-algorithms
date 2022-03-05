function makeOptionalCaseTuple (array) {
  const result = []

  array.forEach((value, index, origin) => {
    const rest = origin.slice(index)

    result.push(
      Array(origin.length - rest.length)
        .fill(null)
        .concat(rest)
    )
  })

  return result;

  // 조합 알고리즘 필요
}

const data = ['새빨간', '멋쟁이', '토마토']

console.log(
  makeOptionalCaseTuple(data),
)