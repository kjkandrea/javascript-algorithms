import { Oof1, OofN, OofNSquare, OofNCubic, OofLogN, OSquareRootN, OofNM } from './bigO'
import range from '../helper/range'

describe('bigO', () => {
  const LENGTH = 43; // 1 - 100
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

  describe('OofNSquare 은', () => {
    const fn = jest.fn(() => {})

    it(`sortedArray length 가 ${LENGTH} 일때에 ${LENGTH * LENGTH}번 실행된다.`, () => {
      OofNSquare(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(LENGTH * LENGTH)
    })
  })

  describe('OofNCubic 은', () => {
    const fn = jest.fn(() => {})

    it(`sortedArray length 가 ${LENGTH} 일때에 ${LENGTH * LENGTH * LENGTH}번 실행된다.`, () => {
      OofNCubic(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(LENGTH * LENGTH * LENGTH)
    })
  })

  describe('OofLogN 은', () => {
    const fn = jest.fn(() => {})

    const log2 = Math.floor(Math.log2(LENGTH));

    it(`sortedArray length 가 ${LENGTH} 일때에 ${log2}번 실행된다.`, () => {
      OofLogN(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(log2)
    })
  })

  describe('OSquareRootN 은', () => {
    const fn = jest.fn(() => {})

    const sqrt = Math.ceil(Math.sqrt(LENGTH))

    it(`sortedArray length 가 ${LENGTH} 일때에 ${sqrt}번 실행된다.`, () => {
      OSquareRootN(sortedArray, fn)
      expect(fn.mock.calls.length).toBe(sqrt)
    })
  })

  describe('OofNM 은', () => {
    const fn = jest.fn(() => {})

    const n = range(LENGTH)
    const m = range(Math.floor(LENGTH/2))
    const nm = n.length * m.length
    it(`n length 가 ${LENGTH}, m length 가 ${Math.floor(LENGTH/2)} 일때에 ${nm}번 실행된다.`, () => {
      OofNM(n, m, fn)

      expect(fn.mock.calls.length).toBe(nm)
    })
  })
})