import binarySearch from './binarySearch'
import range from '../helper/range'
import linearSearch from './linearSearch'

describe('binarySearch', () => {
  const list = range(10000)

  describe('list 의 길이가 10000 이면', () => {
    describe('[성공 테스트] 1을 찾을때에', () => {
      const { index, success } = binarySearch(list, 1)

      it('index 는 1이다.', () => {
        expect(index).toBe(1)
      });

      it('success 는 true 이다.', () => {
        expect(success).toBe(true)
      })
    })
  })

  describe('[실패 테스트] 10000을 찾을때에', () => {
    const { howMany, success } = linearSearch(list, 10000)
    // it('10000번의 탐색을 거친다.', () => {
    //   expect(howMany).toBe(10000)
    // })

    it('success 는 false 이다.', () => {
      expect(success).toBe(false)
    })
  })
})