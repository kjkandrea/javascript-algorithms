import input from './input.js'

class UserTable {
  constructor (rawInfo) {
    this.data = UserTable.parseInfo(rawInfo)
  }

  static parseInfo (info) {
    const result = new Map()
    info.forEach(data => {
      const array = data.split(' ')
      const score = Number(array.pop())
      result.set(score, UserTable.makeArrayOptionalCases(array))
    })
    return result;
  }

  static makeArrayOptionalCases = (array, emptyValue = '-') => {
    const result = []

    array.forEach((value, index, origin) => {
      const rest = origin.slice(index)
      const emptyArray = Array(origin.length - rest.length).fill(emptyValue)
      result.push(emptyArray.concat(rest).join(' and '))
    })

    result.push(Array(array.length).fill(emptyValue).join(' and '))
    return result;
  }
}

const parseQuery = query => {
  const array = query.split(' and ')
  const tail = array.pop()
  const [flavor, score] = tail.split(' ')
  array.push(flavor)
  return {
    score: Number(score),
    query: array.join(' and ')
  };
}

const solution = (info, query) => {
  const { data } = new UserTable(info)
  console.log(query.map(parseQuery))
}

function main () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  console.log(queries)
  // console.log(result, o, result.join() === o.join())
}

main()