import input from './input.js'

class UserTable {
  scores
  table

  constructor (payload, query) {
    this.setTable(payload)
    this.queries = UserTable.parseQueries(query)
  }

  allSearch = () => this.queries.map(this.search)

  search = query => {
    const { lang, position, level, flavor, score } = query

    console.log(this.scores, score)
    const result = UserTable.binarySearchIndex(this.scores, score, (current, score) => current >= score)
    console.log(result)

    // 다 돌면서 찾기 않게 하기...
    // 근데 해시테이블 형태로 설계하면 메모리 감당가능할까?

    // 이 문제가 복수 쿼리인 이유!!
    // 유저 테이블을 미리 분류해서 이후 시간 복잡도를 줄이라는 의도이다.

    // 1. 스코어를 별도의 배열에 저장해둔다. sorted array 로!!!
    // 2. 스코어를 키로 삼는 HashTable 을 만들어낸다.
    // 3. 스코어를 이진검색 돌려 해당하는 스코어들을 찾아낸다.
    // 4. 찾아진 스코어로 HashTable 접근하여 스코어에 해당하는 조건 검색을 완수한다.
    // 5. 그 뒤로 브루트 포스로 모두 다 대조해야하나? 이 뒤엔 아직 깜깜하다..
  }

  setTable (payload) {
    const scores = new Set()
    const table = new Map()

    payload.forEach(data => {
      const [lang, position, level, flavor, stringScore] = data.split(' ')

      const score = Number(stringScore)

      // WARN : SIDE EFFECT
      scores.add(score)

      const prev = table.get(score);
      if (prev) {
        table.set(score, prev.concat({ lang, position, level, flavor }))
      } else {
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
    let left = 0;
    let right = sortedArray.length - 1
    let mid = Math.floor((left + right)/2)

    while (left < right) {
      if (predict(sortedArray[mid], findValue)) return mid

      if (sortedArray[mid] < findValue) {
        left = mid + 1
      } else {
        right = mid - 1
      }

      mid = Math.floor((left + right)/2)
    }

    return -1
  }
}

function solution (info, query) {
  const { scores, table, queries, search, allSearch } = new UserTable(info, query)

  return search(queries[0])
  // return allSearch()
}

(function () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)
  // console.log(result, o, result.join() === o.join())
})()