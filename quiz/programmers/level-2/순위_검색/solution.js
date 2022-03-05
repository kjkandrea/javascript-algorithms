import input from './input.js'

const parseItem = item => {
  return item.split(' ')
}

const getArrayOptionalCases = (array, emptyValue)  => {
  const result = []

  array.forEach((value, index, origin) => {
    const rest = origin.slice(index)
    const emptyArray = Array(origin.length - rest.length).fill(emptyValue)
    result.push(emptyArray.concat(rest))
  })

  return result;
}

const solution = (info, query) => {
  const testArray = info[0].split(' ');
  testArray.pop()
  console.log(getArrayOptionalCases(testArray, '-'))
  // console.log(query[0])
}

function main () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  // console.log(result, o, result.join() === o.join())
}

main()