import users from './fixtures/users.js'

const userHashTable = new Map()
for (const { name, id, age } of users) {
  userHashTable.get(name) === undefined
    ? userHashTable.set(name, [{ id, age }])
    : userHashTable.set(name, userHashTable.get(name).concat([{ id, age }]))
}

console.log(
  userHashTable
)