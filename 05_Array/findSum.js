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

// O(n)
export function findSumInTheBook (arr, weight) {
  const hashtable = {} // key: diff, value: i

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const diff = weight - current

    if (hashtable[current] !== undefined) {
      return [i, hashtable[current]]
    }

    hashtable[diff] = i;
  }
  return -1
}