import range from '../helper/range.js'

const list = range(10000)

export default function binarySearch(list, findValue) {
  let index = -1;
  let howMany = list.length;

  let middleIndex = Math.floor((list.length - 1) / 2);
  for (let i = 0; i < list.length; i++) {
    if (1 >= middleIndex) {
      howMany = i;
      break;
    }
    if (list[middleIndex] !== findValue) {
      middleIndex = Math.floor(middleIndex / 2);
      continue;
    }
    index = middleIndex;
    howMany = i + 1;
  }

  return {
    success: index > 0,
    index,
    howMany
  }
}

console.log(
  binarySearch(list, 1000)
)