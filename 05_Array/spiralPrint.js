const square = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]

spiralPrint(square)

function spiralPrint (square) {
  const width = square[0].length
  const height = square.length

  console.log(width)
  console.log(height)

  let count = 0;
  for (let i = 0; i < height ;i++) {
    for (let j = 0; j <  width; j++) {
      count++
      console.log('%s : %s', count, square[i][j])
    }
  }
}