// O(n) or O(1)
export function insert (array, insertIndex, payload) {
  let nextValue = payload;

  for (let i = insertIndex; i < array.length; i++) {
    const temp = array[i];
    array[i] = nextValue;
    nextValue = temp;
  }

  array.push(nextValue)
}

// O(n) or O(1)
export function remove (array, removeIndex) {
  for (let i = removeIndex; i < array.length; i++ ) {
    array[i] = array[i + 1]
  }

  array.pop()
}

/**
 * 따라서 배열은 마지막 인덱스만을 추가/삭제하는 경우가 아니라면, 추가와 삭제가 반복되는 로직에서 권장하지않는다.
 * 최악의 경우 추가/삭제에도 선형시간 복잡도 O(n) 가 걸리기 때문.
 * array.prototype.splice 는 선형시간 복잡도 O(n) 를 가진다.
 */