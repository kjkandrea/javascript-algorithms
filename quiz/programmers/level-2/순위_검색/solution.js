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
        && (score === '-' || Number(data.score) >= Number(score))
    ).length
  }

  static parseTable (payload) {
    return payload.map(data => {
      const [lang, position, level, flavor, score] = data.split(' ')
      return { lang, position, level, flavor, score }
    })
  }

  static parseQueries (query) {
    return query.map(data => {
      const [lang, position, level, favorAndScore] = data.split(' and ')
      const [flavor, score] = favorAndScore.split(' ')
      return { lang, position, level, flavor, score }
    })
  }
}

function solution(info, query) {
  const { allSearch } = new UserTable(info, query)
  return allSearch()
}

(function () {
  const [i1, i2, o] = input
  const result = solution(i1, i2);
  console.log(result, o, result.join() === o.join())
})()