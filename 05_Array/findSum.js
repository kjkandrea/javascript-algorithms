export const arr = [1, 2, 3, 4, 5]
export const weight = 9
export const correct = [3, 4]

// O(n^2)
export function findSum (arr, weight) {
  const entry = [null, null]

  for (let i = 0; i < arr.length; i++) {
    entry[0] = arr[i]
    for (let j = 0; j < arr.length; j++) {
      entry[1] = arr[j]
      if (entry[0] + entry[1] === weight) {
        return [i, j]
      }
    }
  }
  return -1
}