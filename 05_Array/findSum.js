export const arr = [1, 2, 3, 4, 5]
export const weight = 9
export const correct = [3, 4]

// O(n^2)
export function findSum (arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) {
        return [i, j]
      }
    }
  }
  return -1
}

export function findSumInTheBook () {

}