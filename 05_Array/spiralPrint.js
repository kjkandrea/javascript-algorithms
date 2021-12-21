const square = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]

spiralPrint(square)

function spiralPrint (square) {
  let topRow = 0,
    leftCol = 0,
    btmRow = square.length - 1,
    rightCol = square[0].length - 1

  while (topRow < btmRow && leftCol < rightCol) {
    for (let col = 0; col <= rightCol; col++) {
      console.log(square[topRow][col])
    }
    topRow++
    for (let row = topRow; row <= btmRow; row++) {
      console.log(square[row][rightCol])
    }
    rightCol--
    if (topRow <= btmRow) {
      for (let col = rightCol; col > 0; col--) {
        console.log(square[btmRow][col])
      }
      btmRow--
    }
    if (leftCol <= rightCol) {
      for (let row = btmRow; row > topRow; row--) {
        console.log(square[row][leftCol])
      }
      leftCol++
    }
  }
}