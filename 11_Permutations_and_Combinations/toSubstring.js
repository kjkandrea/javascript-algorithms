const str = 'banana'

const range = num => Array.from(Array(num), (_, i) => i + 1)

class ToSubstring {
  constructor (str) {
    this.str = str
    this.range = range(str.length).reverse()
  }

  // O(n^2)
  getAll () {
    const result = []
    const { length } = this.str

    const ran = range(length).reverse()
    let headIndex = 0
    ran.forEach(v => {
      while (this.str[v + headIndex - 1]) {
        const tailIndex = v + headIndex
        const string = this.str.substring(headIndex, tailIndex)
        result.push(string)
        headIndex += 1
      }
      headIndex = 0
    })

    return result
  }
}

function toSubstring (str) {
  const toSub = new ToSubstring(str)

  return toSub.getAll()
}

console.log(
  toSubstring(str), // 'banana' | 'banan' | 'anana' | 'bana' | 'anan' | 'nana' |
                   // 'ban' | 'ana' ...
)