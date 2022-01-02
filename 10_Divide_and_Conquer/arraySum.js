// 분할정복을 이용하여 구현한 재귀함수
function arraySum(array) {
  // 1.
  // 먼저 기본 단계를 찾는다. 기본 단계는 원소의 개수가 0개이거나 1개인 배열을 받을 때이다.
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0]

  // 2.
  // 재귀 호출을 할 때마다 호출 대상이 되는 배열의 크기를 줄인다.
  // sum([1, 2, 3])은 1 + sum([2, 3])으로도 계산 가능하므로 sum 함수에 더 작은 배열을 넘겨 문제의 크기를 줄인다.
  return array[0] + arraySum(array.slice(1))
}

console.log(
  arraySum([1,2,3,4,5])
)