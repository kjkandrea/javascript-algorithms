import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const meetingTimes = lines.map(line => {
  const [start, end] = line.split(' ')
  return [Number(start), Number(end)]
})

function solution (meetingTimes) {
  console.log(meetingTimes)
}

console.log(
  solution(meetingTimes)
)