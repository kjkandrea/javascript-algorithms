export default class GameMap {
  constructor (n) {
    this.value = Array.from(Array(n), () => Array.from(Array(n), () => null))
  }
}