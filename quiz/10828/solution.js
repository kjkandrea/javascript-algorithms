import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);

console.log(lines)

class Stack {
  constructor () {
    console.log('hello')
  }
}