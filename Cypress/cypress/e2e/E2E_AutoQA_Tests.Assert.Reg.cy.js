describe('Landing Page', () => {

  let user

  before(() => {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  beforeEach(() => {
    cy.SkipModal()
  })

  it('Should show error when Name is empty', () => {

    cy.get('.header_signin').click()
    cy.contains('button', 'Registration').click()

    cy.get('#signupName')
      .focus()
      .blur()

    cy.checkInvalidField('#signupName')

    cy.get('.invalid-feedback')
      .should('contain.text', 'Name required')

  })

  it('Should show error when Name contains invalid characters', () => {

    cy.get('.header_signin').click()
    cy.contains('button', 'Registration').click()

    cy.get('#signupName')
      .type('123')
      .blur()

    cy.checkInvalidField('#signupName')

    cy.contains('.invalid-feedback', 'Name is invalid')
      .should('contain.text', 'Name is invalid')

  })

  it('Should show error when Name has less than 2 characters', () => {

    cy.get('.header_signin').click()
    cy.contains('button', 'Registration').click()

    cy.get('#signupName')
      .type('A')
      .blur()

    cy.checkInvalidField('#signupName')

    cy.get('.invalid-feedback')
      .should('contain.text', 'Name has to be from 2 to 20 characters long')

  })

  it('Should show error when Name has more than 20 characters', () => {

    cy.get('.header_signin').click()
    cy.contains('button', 'Registration').click()

    cy.get('#signupName')
      .type('ABCDEFGHIJKLMNOPQRSTU')
      .blur()

    cy.checkInvalidField('#signupName')

    cy.get('.invalid-feedback')
      .should('contain.text', 'Name has to be from 2 to 20 characters long')

  })

it('Should show error when Last Name is empty', () => {

  cy.get('.header_signin').click()
  cy.contains('button', 'Registration').click()

  cy.get('#signupLastName')
    .focus()
    .blur()

  cy.checkInvalidField('#signupLastName')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Last name required')

})

it('Should show error when Last Name contains invalid characters', () => {

  cy.openRegistrationForm()

  cy.get('#signupLastName')
    .type('123')
    .blur()

  cy.checkInvalidField('#signupLastName')

  cy.contains('.invalid-feedback', 'Last name is invalid')
    .should('contain.text', 'Last name is invalid')

})

it('Should show error when Last Name has less than 2 characters', () => {

  cy.openRegistrationForm()

  cy.get('#signupLastName')
    .type('A')
    .blur()

  cy.checkInvalidField('#signupLastName')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Last name has to be from 2 to 20 characters long')

})

it('Should show error when Last Name has more than 20 characters', () => {

  cy.openRegistrationForm()

  cy.get('#signupLastName')
    .type('ABCDEFGHIJKLMNOPQRSTU') // 21 символ
    .blur()

  cy.checkInvalidField('#signupLastName')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Last name has to be from 2 to 20 characters long')

})

it('Should show error when Email is empty', () => {

  cy.openRegistrationForm()

  cy.get('#signupEmail')
    .focus()
    .blur()

  cy.checkInvalidField('#signupEmail')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Email required')

})

it('Should show error when Email is incorrect', () => {

  cy.openRegistrationForm()

  cy.get('#signupEmail')
    .type('test')
    .blur()

  cy.checkInvalidField('#signupEmail')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Email is incorrect')

})

it('Should accept valid Email', () => {

  cy.openRegistrationForm()

  cy.get('#signupEmail')
    .type('test@gmail.com')
    .blur()

  cy.get('#signupEmail')
    .should('not.have.class', 'is-invalid')

  cy.contains('.invalid-feedback', 'Email is incorrect')
    .should('not.exist')

})

it('Should show error when Password is invalid', () => {

  cy.openRegistrationForm()

  cy.get('#signupPassword')
    .type('test')
    .blur()

  cy.checkInvalidField('#signupPassword')

  cy.get('.invalid-feedback')
    .should(
      'contain.text',
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    )

})

it('Should show error when Re-enter Password is empty', () => {

  cy.openRegistrationForm()

  cy.get('#signupRepeatPassword')
    .focus()
    .blur()

  cy.checkInvalidField('#signupRepeatPassword')

  cy.get('.invalid-feedback')
    .should('contain.text', 'Re-enter password required')

})

it('Should register user successfully', () => {

  cy.openRegistrationForm()

  cy.get('#signupName')
    .type('John')

  cy.get('#signupLastName')
    .type('Smith')

  cy.get('#signupEmail')
    .type(user.email)

  cy.get('#signupPassword')
    .type(user.password, { sensitive: true })

  cy.get('#signupRepeatPassword')
    .type(user.password, { sensitive: true })

  cy.contains('button', 'Register')
    .should('not.be.disabled')
    .click()

  cy.contains('Garage')
    .should('be.visible')

})

it('Should login with registered credentials', () => {

  cy.login(user.email, user.password)

  cy.url()
    .should('include', '/panel/garage')

})

})