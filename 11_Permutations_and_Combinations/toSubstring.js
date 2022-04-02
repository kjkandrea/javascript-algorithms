const str = 'banana'

const range = num => Array.from(Array(num), (_, i) => i + 1)

function toSubstring (str) {
  const result = []
  const { length } = str

  const ran = range(length).reverse()
  let headIndex = 0;
  ran.forEach(v => {
    while (str[v + headIndex - 1]) {
      const tailIndex = v + headIndex;
      const string = str.substring(headIndex, tailIndex)
      result.push(string)
      headIndex += 1;
    }
    headIndex = 0;
  })

  return result;
}

console.log(
  toSubstring(str) // 'banana' | 'banan' | 'anana' | 'bana' | 'anan' | 'nana' | 'ban' | 'ana' ...
)