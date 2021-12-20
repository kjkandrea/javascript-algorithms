export function Oof1 (list, fn) {
  fn(list[0])
}

export function OofN (list, fn) {
  for (let i = 0; i < list.length ;i++)
    fn(list[i])
}