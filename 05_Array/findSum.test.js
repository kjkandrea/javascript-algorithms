import { findSum } from './findSum'

const subject = '배열 arr 이 있고 어떤 수 weight 가 주어졌을때 합쳐서 weight 가 되는 배열 내 항목 두개의 index 를 반환하라. 만약 합쳐서 weight 가 되는 항목 두개가 존재하지 않는 경우 -1 을 반환하라.';
const arr = [1,2,3,4,5];
const weight = 9;
const correct = [3,4]

describe('findSum', () => {
  describe(subject, () => {
    it(`arr : ${arr}, weight: ${weight} 일 때 답은 ${correct} 이다.`, () => {
      expect(findSum(arr, weight)).toEqual(correct)
    })
  })
})