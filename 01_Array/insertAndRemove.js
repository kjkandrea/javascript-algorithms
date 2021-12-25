export function insert (array, insertIndex, payload) {
  let nextValue = payload;

  for (let i = insertIndex; i < array.length; i++) {
    const temp = array[i];
    array[i] = nextValue;
    nextValue = temp;
  }

  array.push(nextValue)
}

export function remove (array, removeIndex) {
  for (let i = removeIndex; i < array.length; i++ ) {
    array[i] = array[i + 1]
  }

  array.pop()
}