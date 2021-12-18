export default function linearSearch(list, findValue) {
  let index = -1;
  let howMany = 0;

  for (let i = 0; i < list.length; i++) {
    if (index > 0) break;
    if (list[i] !== findValue) continue;
    index = i;
    howMany = i + 1;
  }

  return {
    complete: index > 0,
    index,
    howMany
  }
}