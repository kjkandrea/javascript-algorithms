import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const meetingTimes = lines.map(line => {
  const [start, end] = line.split(' ')
  return [Number(end), Number(start)]
})

// TODO: fail
function solution (meetingTimes) {
  meetingTimes = meetingTimes.sort(([a], [b]) => a - b);
  let total = 0;
  let used = [0, 0]
  for (const times of meetingTimes) {
    if (used[0] === 0) {
      used = times
      total += 1
      continue;
    }

    if (used[0] <= times[1]) {
      total += 1;
      used[0] = times[0]
    }
  }
  return total
}

console.log(
  solution(meetingTimes)
)