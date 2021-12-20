import { Oof1 } from './bigO'
import range from '../helper/range'

describe('bigO', () => {
  const LENGTH = 100;
  const sortedArray = range(LENGTH)
  const fn = jest.fn(() => {})

  describe('Oof1 은', () => {
    it(`sortedArray length 가 ${LENGTH} 일때에 1번 실행된다.`, () => {
      Oof1(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(1)
    })
  })
})