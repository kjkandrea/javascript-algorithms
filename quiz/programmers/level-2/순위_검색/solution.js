import input from './input.js'

class UserTable {
  constructor (rawInfo) {
    const [data, scores] = UserTable.parseInfo(rawInfo);
    this.data = data
    this.scores = scores;
  }

  static parseInfo (info) {
    const result = new Map()
    const scores = new Set()
    info.forEach(data => {
      const array = data.split(' ')
      const score = Number(array.pop())
      scores.add(score)

      const prev = result.get(score)
      if (prev) {
        result.set(score, [...new Set(prev.concat(UserTable.makeArrayOptionalCases(array)))])
      } else {
        result.set(score, UserTable.makeArrayOptionalCases(array))
      }

    })
    return [result, [...scores].sort((a, b) => a - b)];
  }

  // TODO: 이렇게 조합으로 하지말고 순열로 해야할거같은데...
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
    this.data = data // map
    this.scores = scores
    this.searchLength(detailQueries[0])
  }

  // TODO: makeArrayOptionalCases 가 틀린거같음. 갑분싸되서 구현중단
  searchLength = (detailQuery) => {
    const { score, query } = detailQuery

    const sliceIndex = Search.binaryIndexSearch(this.scores, score, (current, value) => current >= value)
    const matchedScores = sliceIndex !== -1 ? this.scores.slice(sliceIndex - 1) : [];
    console.log(this.data)
    console.log(matchedScores)
  }

  static binaryIndexSearch (sortedArray, value, predict) {
    let left = 0;
    let right = sortedArray.length - 1
    let mid = Math.floor((left + right) / 2)

    while(left < right) {
      if (predict(sortedArray[mid], value)) {
        console.log(sortedArray[mid])
        return mid
      }

      if (sortedArray[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
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