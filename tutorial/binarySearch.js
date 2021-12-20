// O(log N) : o of log n
export default function binarySearch (sortedList, findValue) {
  let start = 0;
  let end = sortedList.length - 1;
  let howMany = 0;

  while (start <= end) {
    howMany++
    const mid = Math.floor((start + end) / 2);

    if (sortedList[mid] === findValue) return { success: true, index: mid, howMany };

    findValue < sortedList[mid] ? end = mid - 1 : start = mid + 1;
  }

  return {
    success: false,
    index: -1,
    howMany
  };
}