import binarySearch from './binarySearch'
import range from '../helper/range'

describe('binarySearch', () => {
  const list = range(10000)

  describe('list 의 길이가 10000 이면', () => {
    describe('[성공 테스트] 1을 찾을때에', () => {
      const { index } = binarySearch(list, 1)

      it('index 는 1이다.', () => {
        expect(index).toBe(1)
      });
    })
  })
})