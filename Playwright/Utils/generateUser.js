function generateUser() {

  const timestamp = Date.now()

  return {
    name: 'John',
    lastName: 'Smith',
    email: `aqa-${timestamp}@test.com`,
    password: 'Password1'
  }

}

module.exports = generateUser