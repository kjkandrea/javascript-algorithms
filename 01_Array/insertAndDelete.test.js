import range from '../helper/range'
import { insert } from './insertAndDelete'

describe('insertAndDelete', () => {
  describe('insert(array, 3, "🐈")', () => {
    it('array 의 3번째 인덱스에 🐈 가 추가된다.', () => {
        const array = range(5)
        insert(array, 3, '🐈')
        expect(array[3]).toBe('🐈')
    })

    it('result.length 는 array.length + 1 이다.', () => {
      const array = range(5)
      const beforeLength = array.length
      insert(array, 3, '🐈')
      console.log(array)
      expect(array.length).toBe(beforeLength + 1)
    })
  })
})