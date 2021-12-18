import range from './range.js'

describe('range', () => {
  describe('range(10)', () => {
  const result = range(10)
    it('length is 10', () => {
      expect(result.length).toBe(10)
    })

    it('first index is 0', () => {
      const firstIndex = 0;
      expect(result[firstIndex]).toBe(0)
    })

    it('last index is 9', () => {
      const lastIndex = result.length - 1;
      expect(result[lastIndex]).toBe(9)
    })

    const middleIndex = Math.floor((result.length - 1) / 2)
    it(`middleIndex(${middleIndex}) is 4`, () => {
      expect(result[middleIndex]).toBe(4)
    })
  })
})