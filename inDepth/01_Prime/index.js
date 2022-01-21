import range from '../../helper/range.js'

const numbers = range(100)

//const primes = numbers.filter(isPrime2)
const primes = getPrimes(numbers)
console.log(primes)

// O(n)
function isPrime(num) {
  for (let i = 2; i < num ; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

// O(sqrt(n))
function isPrime2(num) {
  for (let i = 2; i * i <= num ; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

// 에라토스테네스의 체
// O(n log log n)
function getPrimes(numbers) {
  for (let i = 2; i * i <= numbers.length; i += 1) {
    if (numbers[i]) {
      for (let j = i * 2; j <= numbers.length; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers.filter(Boolean)
}