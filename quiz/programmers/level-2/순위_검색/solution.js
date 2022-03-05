import input from './input.js'

// 성능개선 하면서 버그 생긴듯. 테케 다 통과 못함. 망함
class UserTable {
  constructor (payload, query) {
    this.setTable(payload)
    this.queries = UserTable.parseQueries(query)
  }

  allSearch = () => this.queries.map(this.search)

  search = query => {
    const { lang, position, level, flavor, score } = query

    const index = UserTable.binarySearchIndex(this.scores, score,
      (current, score) => current >= score)
    const matchedScore = this.scores.slice(index)

    return matchedScore.map(
      score => this.table.get(score),
    ).flat().filter(data =>
      // (score === '-' || Number(data.score) >= Number(score))
      (lang === '-' || data.lang === lang)
      && (position === '-' || data.position === position)
      && (level === '-' || data.level === level)
      && (flavor === '-' || data.flavor === flavor),
    ).length
  }

  setTable (payload) {
    const scores = new Set()
    const table = new Map()

    payload.forEach(data => {
      const [lang, position, level, flavor, stringScore] = data.split(' ')

      const score = Number(stringScore)

      // WARN : SIDE EFFECT
      scores.add(score)

      const prev = table.get(score)
      if (prev) {
        table.set(score, prev.concat({ lang, position, level, flavor }))
      }
      else {
        table.set(score, [{ lang, position, level, flavor }])
      }
    })

    this.scores = [...scores].sort((a, b) => a - b)
    this.table = table
  }

  static parseQueries (query) {
    return query.map(data => {
      const [lang, position, level, favorAndScore] = data.split(' and ')
      const [flavor, stringScore] = favorAndScore.split(' ')
      return { lang, position, level, flavor, score: Number(stringScore) }
    })
  }

  static binarySearchIndex (sortedArray, findValue, predict) {
    let left = 0
    let right = sortedArray.length - 1
    let mid = Math.floor((left + right) / 2)

    while (left < right) {
      if (predict(sortedArray[mid], findValue)) {
        return mid
      }

      if (sortedArray[mid] < findValue) {
        left = mid + 1
      }
      else {
        right = mid - 1
      }

      mid = Math.floor((left + right) / 2)
    }

    return 0
  }
}

const solution = (info, query) => {
  return new UserTable(info, query).allSearch()
}

function main () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  console.log(result, o, result.join() === o.join())
}

main()