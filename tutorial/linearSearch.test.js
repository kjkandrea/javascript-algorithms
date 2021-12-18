import range from '../helper/range'
import linearSearch from './linearSearch'

describe('linearSearch', () => {
  const list = range(10000)

  describe('list 의 길이가 10000 이면', () => {
    it('0을 찾을때에 1번의 탐색을 거친다', () => {
      const { howMany } = linearSearch(list, 0)

      expect(howMany).toBe(1)
    })

    it('4999을 찾을때에 5000번의 탐색을 거친다', () => {
      const { howMany } = linearSearch(list, 4999)

      expect(howMany).toBe(5000)
    })

    it('9999을 찾을때에 10000번의 탐색을 거친다', () => {
      const { howMany } = linearSearch(list, 9999)

      expect(howMany).toBe(10000)
    })

    describe('10000을 찾을때에', () => {
      const { howMany } = linearSearch(list, 10000)
      it('10000번의 탐색을 거친다', () => {
        expect(howMany).toBe(10000)
      })
    })
  })
})