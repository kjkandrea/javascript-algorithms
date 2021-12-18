import range from '../helper/range'
import linearSearch from './linearSearch'

describe('linearSearch', () => {
  const list = range(10000)

  describe('list 의 길이가 10000 이면', () => {
    it('0을 찾을때에 1번의 탐색을 거친다', () => {
      const { howMany } = linearSearch(list, 0)

      expect(howMany).toBe(1)
    })
  })
})