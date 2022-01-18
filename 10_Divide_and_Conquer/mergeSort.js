const list = [6,5,3,4]// [6,5,3,1,8,7,2,4]

console.log(
  mergeSort(list)
)

function mergeSort(list) {
  if (list.length > 3) {
    return [
      mergeSort(list.slice(0, list.length/2)),
      mergeSort(list.slice(list.length/2, list.length))
    ]
  }

  const left = list[0]
  const right = list[1]

  if (left > right) {
    return [right, left]
  } else {
    return [left, right]
  }
}