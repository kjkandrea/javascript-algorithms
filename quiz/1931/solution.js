import fs from 'fs';

const line = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const meetingTimes = line.map(([start, end]) => [
  Number(start),
  Number(end),
])

function solution (meetingTimes) {
  console.log(meetingTimes)
}

console.log(
  solution(meetingTimes)
)