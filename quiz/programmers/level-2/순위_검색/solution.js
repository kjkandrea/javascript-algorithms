import input from './input.js'

class UserTable {
  constructor (rawInfo) {
    const [data, scores] = UserTable.parseInfo(rawInfo);
    this.data = data
    this.scores = scores;
  }

  static parseInfo (info) {
    const result = new Map()
    const scores = []
    info.forEach(data => {
      const array = data.split(' ')
      const score = Number(array.pop())
      scores.push(score)

      const prev = result.get(score)
      if (prev) {
        result.set(score, [...new Set(prev.concat(UserTable.makeArrayOptionalCases(array)))])
      } else {
        result.set(score, UserTable.makeArrayOptionalCases(array))
      }

    })
    return [result, scores.sort((a, b) => a - b)];
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

class Search {
  constructor (data, scores, detailQueries) {
    this.data = data
    this.scores = scores
    this.searchLength(detailQueries[0])
  }

  searchLength = (detailQuery) => {
    console.log(detailQuery)
    // const { score, query } = detailQuery
    // console.log(this.scores)
    // console.log(this.query)
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
  const { data, scores } = new UserTable(info)
  const detailQueries = query.map(parseQuery)
  new Search(data, scores, detailQueries)
}

function main () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  // console.log(result, o, result.join() === o.join())
}

main()