import users from './fixtures/users.js'

const userHashTable = {}
for (const user of users) {
  userHashTable[user.name] === undefined
    ? userHashTable[user.name] = [user]
    : userHashTable[user.name].push(user)
}
console.log(userHashTable)