import { Oof1, OofN } from './bigO'
import range from '../helper/range'

describe('bigO', () => {
  const LENGTH = 100;
  const sortedArray = range(LENGTH)

  describe('Oof1 은', () => {
    const fn = jest.fn(() => {})

    it(`sortedArray length 가 ${LENGTH} 일때에 1번 실행된다.`, () => {
      Oof1(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(1)
    })
  })

  describe('OofN 은', () => {
    const fn = jest.fn(() => {})

    it(`sortedArray length 가 ${LENGTH} 일때에 ${LENGTH}번 실행된다.`, () => {
      OofN(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(LENGTH)
    })
  })
})