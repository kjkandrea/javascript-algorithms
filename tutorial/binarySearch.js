import range from '../helper/range.js'

const list = range(5)

export default function binarySearch (list, findValue) {
  let index = Math.floor((list.length - 1) / 2)
  let value = list[index]

  for (let i = 0; i < list.length; i++ ) {
    if (value === findValue) return {
      success: true,
      index,
      howMany: i + 1,
    };
    const direction = value > findValue ? 'LEFT' : 'RIGHT';
    switch (direction) {
      case 'LEFT':
        index = index / 2
        value = list[index]
        break;
      case 'RIGHT':
        index = index + (index / 2)
        value = list[index]
        break;
    }
  }
  return null;
}

console.log(
  binarySearch(list, 3),
)