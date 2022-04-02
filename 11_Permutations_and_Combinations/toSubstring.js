const str = 'banana'

const range = num => Array.from(Array(num), (_, i) => i + 1)

class ToSubstring {
  constructor (str) {
    this.str = str
    this.range = range(str.length).reverse()
    this.currentRange = this.range[0]
    this.headIndex = 0;
    this.currentResult = null;
  }

  next = () => {
    const tailIndex = this.currentRange + this.headIndex
    this.currentResult = this.str.substring(this.headIndex, tailIndex)

    if (this.str[tailIndex + this.headIndex]) {
      this.headIndex += 1;
    } else {
      this.currentRange -= 1
      this.headIndex = 0;
    }
    return this.currentResult;
  }

  // O(n^2)
  getAll () {
    const result = []

    let headIndex = 0
    this.range.forEach(v => {
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

  const result = toSub.getAll();
  console.log(toSub.next())
  console.log(toSub.currentResult)
  console.log(toSub.next())
  console.log(toSub.next())
  return result;
}

console.log(
  toSubstring(str), // 'banana' | 'banan' | 'anana' | 'bana' | 'anan' | 'nana' |
                   // 'ban' | 'ana' ...
)