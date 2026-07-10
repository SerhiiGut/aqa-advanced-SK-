class RegistrationPage {

  constructor(page) {
    this.page = page

    this.signInButton = page.locator('.header_signin')
    this.registrationButton = page.getByRole('button', { name: 'Registration' })

    this.nameInput = page.locator('#signupName')
    this.lastNameInput = page.locator('#signupLastName')
    this.emailInput = page.locator('#signupEmail')
    this.passwordInput = page.locator('#signupPassword')
    this.repeatPasswordInput = page.locator('#signupRepeatPassword')

    this.registerButton = page.getByRole('button', { name: 'Register' })
  }

  async open() {
    await this.page.goto('/')
  }

  async openRegistrationForm() {
    await this.signInButton.click()
    await this.registrationButton.click()
  }

  async fillName(name) {
    await this.nameInput.fill(name)
  }

  async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName)
  }

  async fillEmail(email) {
    await this.emailInput.fill(email)
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password)
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password)
  }

  async blurName() {
  await this.nameInput.focus()
  await this.nameInput.blur()
}

  async blurLastName() {
    await this.lastNameInput.blur()
  }

async blurEmail() {
  await this.emailInput.focus()
  await this.emailInput.blur()
}

  async blurPassword() {
    await this.passwordInput.blur()
  }

  async blurRepeatPassword() {
    await this.repeatPasswordInput.blur()
  }

  getValidationMessage(text) {
    return this.page.getByText(text)
  }

  async register(name, lastName, email, password) {

    await this.fillName(name)
    await this.fillLastName(lastName)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.fillRepeatPassword(password)

    await this.registerButton.click()

  }

}

module.exports = RegistrationPage