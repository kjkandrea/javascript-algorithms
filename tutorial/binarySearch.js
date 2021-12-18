export default function binarySearch(list, findValue) {
  let index = -1;
  let howMany = list.length;

  let middleIndex = Math.floor((list.length - 1) / 2);
  for (let i = 0; i < list.length; i++) {
    if (index > 0) break;
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