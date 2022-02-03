import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf8').
  toString().
  trim().
  split('\n')
lines.shift()
const peoples = lines.map(line => line.split(' ').map(Number))

function solution (peoples) {
  const scores = peoples.map(([w, h]) =>
    peoples.filter(([weight]) => w > weight).length
    + peoples.filter(([_, height]) => h > height).length,
  )

  console.log(scores)
}

solution(peoples)