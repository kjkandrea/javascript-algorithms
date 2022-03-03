import input from './input.js'

const slicer = (string, len) => {
  const result = []
  for (let i = 0 ; i < string.length ; i += len) {
    let str = ''
    for (let j = 0; j < len ; j += 1) {
      if (string[i + j]) str += string[i + j]
    }
    result.push(str)
  }
  return result
}

const zip = slicedStrings => {
  const ziped = [[]]
  let index = 0;
  for (let i = 0; i < slicedStrings.length ; i += 1) {
    if (ziped[index][0] === undefined || ziped[index][0] === slicedStrings[i]) {
      ziped[index].push(slicedStrings[i])
    } else {
      index += 1
      ziped[index] = []
      ziped[index].push(slicedStrings[i])
    }
  }
  return ziped
  .map(strings => strings.length !== 1 ? strings.length + strings[0] : strings[0])
  .join('')
}

const getSliceRanges = len => Array.from({ length: len/2}, (_, i) => i + 1)

function solution(s) {
  if (s.length === 1) return 1;

  const sliceRanges = getSliceRanges(s.length);
  return Math.min(...sliceRanges.map(range => zip(slicer(s, range)).length))
}

console.log(
  input.map((inOut) => {
    const input = solution(inOut[0]);
    const output = inOut[1]
    const result = input === output;
    console.log(input, output, result)
    return result;
  }).every(b => b)
)