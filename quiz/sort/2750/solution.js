import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()
const numbers = lines.map(Number)

function mergeSort (numbers) {
  if (numbers.length < 2) {
    return numbers
  }

  const mid = Math.floor(numbers.length / 2)
  const left = numbers.slice(0, mid)
  const right = numbers.slice(mid)

  merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  console.log('left :', left)
  console.log('right :', right)
}

function solution (numbers) {
  console.log(mergeSort(numbers))
}

solution(numbers)