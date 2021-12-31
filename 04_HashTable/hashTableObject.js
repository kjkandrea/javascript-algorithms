import users from './fixtures/users.js'

const userHashTable = {}
for (const { name, id, age } of users) {
  userHashTable[name] === undefined
    ? userHashTable[name] = [{ id, age }]
    : userHashTable[name].push({ id, age})
}

console.log(
  userHashTable
)