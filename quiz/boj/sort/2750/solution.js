import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n')
lines.shift()
const numbers = lines.map(Number)

function mergeSort (numbers) {
  if (numbers.length < 2) {
    return numbers
  }

  const mid = Math.floor(numbers.length / 2)
  const left = numbers.slice(0, mid)
  const right = numbers.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  const sortedArray = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  return [...sortedArray, ...left, ...right]
}

function solution (numbers) {
  console.log(mergeSort(numbers).join('\n').trim())
}

solution(numbers)