import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()
const numbers = lines.map(Number)
console.log(numbers)