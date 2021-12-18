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
    const isLeft = value > findValue;
    console.log('isLeft : %s', isLeft)
    if (isLeft) {
      index = index / 2
      value = list[index]
    }
  }
  return null;
}

console.log(
  binarySearch(list, 1),
)