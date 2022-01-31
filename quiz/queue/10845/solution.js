import fs from "fs"

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
lines.shift()

class Queue {

}

function solution(lines) {
  const commands = lines.map(line => {
    const [cmd, payload] = line.split(' ')
    return {
      cmd,
      payload: payload ? Number(payload) : null
    }
  })

  const queue = new Queue()
  console.log(commands)
}

solution(lines)