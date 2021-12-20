// O(1)
export function Oof1 (list, fn) {
  fn(list[0])
}

// O(n)
export function OofN (list, fn) {
  for (let i = 0; i < list.length ;i++)
    fn(list[i])
}

// O(n^2)
export function OofNSquare (list, fn) {
  for (let i = 0; i < list.length ;i++)
    for (let j = 0; j < list.length ;j++)
      fn(list[i])
}

// O(n^2)
export function OofNCubic (list, fn) {
  for (let i = 0; i < list.length ;i++)
    for (let j = 0; j < list.length ;j++)
      for (let k = 0; k < list.length ;k++)
        fn(list[i])
}

export function OofLogN (list, fn) {

}