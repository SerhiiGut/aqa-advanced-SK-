Cypress.Commands.add('SkipModal', () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  });
});

Cypress.Commands.add('checkInvalidField', (selector) => {
  cy.get(selector)
    .should('have.class', 'is-invalid')
})

Cypress.Commands.add('openRegistrationForm', () => {
  cy.get('.header_signin').click()
  cy.contains('button', 'Registration').click()
})

Cypress.Commands.add('login', (email, password) => {

  cy.get('.header_signin').click()

  cy.get('#signinEmail')
    .type(email)

  cy.get('#signinPassword')
    .type(password, { sensitive: true })

  cy.contains('button', 'Login')
    .click()

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