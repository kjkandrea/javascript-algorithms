import range from '../helper/range'
import { insert, remove } from './insertAndRemove'

describe('insert', () => {
  const TEST_insertLengthCheck = (insertIndex, payload) => it(
    'result.length 는 array.length + 1 이다.', () => {
      const array = range(5)
      const beforeLength = array.length
      insert(array, insertIndex, payload)
      expect(array.length).toBe(beforeLength + 1)
    })

  describe('insert(array, 3, "🐈")', () => {
    it('array 의 3번째 인덱스에 🐈 가 추가된다.', () => {
      const array = range(5)
      insert(array, 3, '🐈')
      expect(array[3]).toBe('🐈')
    })

    TEST_insertLengthCheck(3, '🐈')
  })

  describe('insert(array, 100, "🐈")', () => {
    describe('2번째 인자(insertIndex) 가 배열의 총 길이보다 크면', () => {
      describe('array.push 를 수행한다.', () => {
        TEST_insertLengthCheck(100, '🐈')

        it('array[array.length]은 "🐈" 이다.', () => {
          const array = range(5)
          const beforeLength = array.length
          insert(array, 100, '🐈')
          expect(array[beforeLength]).toBe('🐈')
        })
      })
    })
  })
})

describe('remove', () => {
  describe('remove(array, 3)', () => {
    it('array 의 3번째 인덱스가 삭제되고 후행 값으로 교체된다.', () => {
      const array = range(5)
      const removeIndex = 3;
      const nextIndexValue = array[removeIndex + 1]
      remove(array, removeIndex)
      expect(array[removeIndex]).toBe(nextIndexValue)
    })

  });
});