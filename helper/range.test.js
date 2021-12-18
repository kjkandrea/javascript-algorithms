import range from './range.js'

describe('range', () => {
  describe('range(10)', () => {
  const result = range(10)
    it('length is 10', () => {
      expect(result.length).toBe(10)
    })
  })
})