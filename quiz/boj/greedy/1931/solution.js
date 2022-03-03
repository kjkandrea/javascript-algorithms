import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const meetingTimes = lines.map(line => {
  const [start, end] = line.split(' ')
  return [Number(end), Number(start)]
})

// Greedy + Sort
function solution (meetingTimes) {
  meetingTimes = meetingTimes.sort(([e1, b1], [e2, b2]) => e1 !== e2 ? e1 - e2 : b1 - b2);

  let total = 0;
  let endTime = 0
  for (const times of meetingTimes) {
    if (endTime === 0) {
      endTime = times[0]
      total += 1
      continue;
    }

    if (endTime <= times[1]) {
      total += 1;
      endTime = times[0]
    }
  }
  return total
}

console.log(
  solution(meetingTimes)
)