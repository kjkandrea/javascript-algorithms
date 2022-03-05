/**
 * 조합(Combination)은 n개 중에 r개를 뽑는 경우의 수를 구할 때
 * 순서를 고려하지 않는 개념이다.
 * Input: [1,2,3,4]
 * Output: [ [1,2,3], [1,2,4], [1,3,4], [2,3,4] ]
 **/

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
//
//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
//     const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
//     const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//     results.push(...attached); // 배열 spread syntax 로 모두 다 push
//   });
//
//   return results; // 결과가 담긴 results를 return
// };

function getCombination (arr, selectNumber) {
  const result = []
  if (selectNumber === 1) return arr.map(v => [v])

  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index + 1 )

    console.log(rest)
  })
}

console.log(
  getCombination([1,2,3,4], 4)
)