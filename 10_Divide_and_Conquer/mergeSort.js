const list = [6,5,3,1,8,7,2,4];

console.log(
  mergeSort(list)
)

function mergeSort(list) {
  if (list.length > 3) {
    // [ [ [ 5, 6 ], [ 1, 3 ] ], [ [ 7, 8 ], [ 2, 4 ] ] ]
    list = [
       mergeSort(list.slice(0, list.length/2)),
       mergeSort(list.slice(list.length/2))
    ]
  }

  const left = list[0]
  const right = list[1]

  if (Array.isArray(left) && Array.isArray(right)) {
    return merge(left, right)
  }

  if (left > right) {
    return [right, left]
  } else {
    return [left, right]
  }
}

function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}