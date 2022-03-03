import GameMap from './GameMap'

describe('GameMap', () => {

  describe('크기 테스트 : ', () => {
    const inspectLength = 6
    const { value } = new GameMap(inspectLength)

    describe(`n 이 ${inspectLength} 이면`, () => {
      it(`x축의 길이는 ${inspectLength} 이다.`, () => {
        expect(value[0].length).toBe(inspectLength)
      })

      it(`y축의 길이는 ${inspectLength} 이다.`, () => {
        expect(value.length).toBe(inspectLength)
      })
    })
  })
})