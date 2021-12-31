const sortedArray = [1, 1, 5, 124 , 400, 599, 1004, 2876, 8712] //

function binarySearch (sortedArray, findValue) {
  let left = 0;
  let right = sortedArray.length - 1;
  let mid = Math.floor((left + right) / 2)

  let howMany = 0; // 실행 횟수 테스트 코드
  while (left < right) {
    howMany++
    if (sortedArray[mid] === findValue) {
      console.log('howMany :', howMany)
      return mid;
    }

    if (sortedArray[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2)
  }

  console.log('howMany :', howMany)
  return -1;
}

console.log(
  'index : ',
  binarySearch(sortedArray, 1004)
)