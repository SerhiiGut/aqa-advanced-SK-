Cypress.Commands.add('SkipModal', () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  })
})

Cypress.Commands.add('checkInvalidField', (selector) => {
  cy.get(selector)
    .should('have.class', 'is-invalid')
})

Cypress.Commands.add('openRegistrationForm', () => {
  cy.get('.header_signin').click()
  cy.contains('button', 'Registration').click()
})

Cypress.Commands.add('login', (email, password) => {

  cy.SkipModal()

  cy.get('.header_signin').click()

  cy.get('#signinEmail')
    .type(email)

  cy.get('#signinPassword')
    .type(password, { sensitive: true })

  cy.contains('button', 'Login')
    .click()

})

Cypress.Commands.add('createExpense', (
  carId,
  mileage,
  liters,
  totalCost
) => {

  cy.request({
    method: 'POST',
    url: '/api/expenses',
    body: {
      carId,
      reportedAt: '2026-06-28',
      mileage: Number(mileage),
      liters: Number(liters),
      totalCost: Number(totalCost)
    }
  }).then(({ status, body }) => {

    expect(status).to.eq(200)

    expect(body.status).to.eq('ok')

    expect(body.data.carId).to.eq(carId)
    expect(body.data.mileage).to.eq(Number(mileage))
    expect(body.data.liters).to.eq(Number(liters))
    expect(body.data.totalCost).to.eq(Number(totalCost))

  })

})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {

  if (options && options.sensitive) {
    options.log = false

    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)

})