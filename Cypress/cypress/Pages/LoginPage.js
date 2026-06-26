class LoginPage {

  open() {
    cy.SkipModal()
  }

  clickSignIn() {
    cy.get('.header_signin').click()
  }

  enterEmail(email) {
    cy.get('#signinEmail').type(email)
  }

  enterPassword(password) {
    cy.get('#signinPassword')
      .type(password, { sensitive: true })
  }

  clickLogin() {
    cy.contains('button', 'Login').click()
  }

  login(email, password) {
    this.open()
    this.clickSignIn()
    this.enterEmail(email)
    this.enterPassword(password)
    this.clickLogin()
  }

}

export default new LoginPage()