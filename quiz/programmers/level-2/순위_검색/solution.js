import input from './input.js'

class UserTable {
  constructor (payload, query) {
    this.table = UserTable.parseTable(payload)
    this.queries = UserTable.parseQueries(query)
  }

  allSearch = () => this.queries.map(this.search)

  search = query => {
    const { lang, position, level, flavor, score } = query

    // 다 돌면서 찾기 않게 하기...
    // 근데 해시테이블 형태로 설계하면 메모리 감당가능할까?

    // 이 문제가 복수 쿼리인 이유!!
    // 유저 테이블을 미리 분류해서 이후 시간 복잡도를 줄이라는 의도이다.

    // 1. 스코어를 별도의 배열에 저장해둔다. sorted array 로!!!
    // 2. 스코어를 키로 삼는 HashTable 을 만들어낸다.
    // 3. 스코어를 이진검색 돌려 해당하는 스코어들을 찾아낸다.
    // 4. 찾아진 스코어로 HashTable 접근하여 스코어에 해당하는 조건 검색을 완수한다.
    // 5. 그 뒤로 브루트 포스로 모두 다 대조해야하나? 이 뒤엔 아직 깜깜하다..
    return this.table.filter(
      data =>
        (lang === '-' || data.lang === lang)
        && (position === '-' || data.position === position)
        && (level === '-' || data.level === level)
        && (flavor === '-' || data.flavor === flavor)
        && (score === '-' || Number(data.score) >= Number(score)),
    ).length
  }

  // FIXME : 그냥 배열을 저장하면 어떡하니
  static parseTable (payload) {
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

    console.log(table)

    return [...scores].sort((a, b) => b - a)
  }

  static parseQueries (query) {
    return query.map(data => {
      const [lang, position, level, favorAndScore] = data.split(' and ')
      const [flavor, score] = favorAndScore.split(' ')
      return { lang, position, level, flavor, score }
    })
  }
}

function solution (info, query) {
  const { allSearch } = new UserTable(info, query)
  return allSearch()
}



(function () {
  const [payload, queries, o] = input
  const result = solution(payload, queries)

  console.log(UserTable.parseTable(payload))
  // console.log(result, o, result.join() === o.join())
})()