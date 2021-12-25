import range from '../helper/range'
import { insert } from './insertAndDelete'

describe('insertAndDelete', () => {
  const array = range(5)

  describe('insert(array, 3, "🐈")', () => {
    it('array 의 3번째 인덱스에 🐈 가 추가된다.', () => {
        const result = insert(array, 3, '🐈')
        console.log(result)
        expect(result[3]).toBe('🐈')
    })
  })
})