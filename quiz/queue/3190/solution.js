import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
const square = Number(lines.shift())
const appleLength = Number(lines.shift())
const applePosition = lines.splice(0, appleLength).map(p => p.split(' ').map(Number))
const moveCmdLength = Number(lines.shift())
const moveCmd = lines.map(cmd => {
  const [time, direction] = cmd.split(' ')
  return [Number(time), direction]
})

console.log({
  square,
  appleLength,
  applePosition,
  moveCmdLength,
  moveCmd
})

function generateSquare(n, applePosition) {
  const square =  Array.from(Array(n), () => Array.from(Array(n), () => 'rd'))
  for (const [x, y] of applePosition) {
    square[x][y] = '🍎'
  }
  return square;
}

console.log(generateSquare(square, applePosition))