const list = [6,5]// [6,5,3,1,8,7,2,4]

console.log(
  mergeSort(list)
)

function mergeSort(list) {
  const left = list[0]
  const right = list[1]

  if (left > right) {
    return [right, left]
  } else {
    return [left, right]
  }
}