import range from '../../helper/range.js'

const numbers = range(100)

const primes = numbers.filter(isPrime2)
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