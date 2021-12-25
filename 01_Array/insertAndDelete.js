export function insert (array, insertIndex, payload) {
  let nextValue = payload;
  for (let i = insertIndex; i < array.length; i++) {
    const temp = array[i];
    array[i] = nextValue;
    nextValue = temp;
  }
  return array
}