import range from '../helper/range.js'

const list = range(5)

export default function binarySearch(list, findValue) {
  let index = Math.floor((list.length - 1) / 2);
  let howMany = 1;

  const value = list[index]
  if (findValue !== value) return;
    return {
      success: index > 0,
      index,
      howMany
    }
}

console.log(
  binarySearch(list, 2)
)