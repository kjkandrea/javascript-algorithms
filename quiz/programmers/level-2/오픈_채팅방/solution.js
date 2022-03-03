import input from './input.js'

class Record {
  constructor (stringRecords) {
    const rawRecords = stringRecords.map(str => str.split(' '))
    this._hashTable = this.generateHashTable(rawRecords)
    this._inOutRecord = this.generateInOutRecord(rawRecords)
  }

  generateHashTable(rawRecords) {
    const result = {}

    rawRecords
    .forEach(
      ([status, uid, nickName]) => {
        if (['Enter', 'Change'].includes(status)) result[uid] = nickName
      }
    )

    return result;
  }

  generateInOutRecord(rawRecords) {
    return rawRecords
    .filter(([status]) => status !== 'Change')
    .map (
      ([status, uid]) => {
        return this._hashTable[uid] + (status === 'Enter'
          ? '님이 들어왔습니다.'
          : '님이 나갔습니다.')
      }
    )
  }

  get inOutRecord () {
    return this._inOutRecord
  }
}

function solution(stringRecords) {
  const { inOutRecord } = new Record(stringRecords)
  return inOutRecord
}

console.log(
  input.map((inOut) => {
    const input = solution(inOut[0]);
    const output = inOut[1]
    const result =input.join() === output.join();
    console.log(input, output, result)
    return result;
  }).every(b => b)
)