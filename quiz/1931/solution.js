import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n').splice(1);
const meetingTimes = lines.map(line => {
  const [start, end] = line.split(' ')
  return [Number(end), Number(start)]
})

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

    // 여기서 가능한 시간 추려서 total 낼 예정!
    console.log(times)
  }
  console.log(meetingTimes)
}

console.log(
  solution(meetingTimes)
)