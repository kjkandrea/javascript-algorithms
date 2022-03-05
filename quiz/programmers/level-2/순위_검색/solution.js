import input from './input.js'

const parseItem = item => {
  return item.split(' ')
}

const getInfoCases = info => {
  const result = info.map(data => makeCase(parseItem(data)))

  return result;
}

const solution = (info, query) => {
  console.log(getInfoCases(info))
  console.log(query[0])
}

function main () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  // console.log(result, o, result.join() === o.join())
}

main()