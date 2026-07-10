const { test, expect } = require('@playwright/test')

const RegistrationPage = require('../pages/RegistrationPage')
const generateUser = require('../utils/generateUser')

test.describe('Registration', () => {

  let registrationPage
  let user

  test.beforeEach(async ({ page }) => {

    registrationPage = new RegistrationPage(page)
    user = generateUser()

    await registrationPage.open()
    await registrationPage.openRegistrationForm()

  })

  test('Should register new user successfully', async ({ page }) => {

    await registrationPage.register(
      user.name,
      user.lastName,
      user.email,
      user.password
    )

    await expect(page).toHaveURL(/garage/)

    await expect(
      page.getByRole('heading', { name: 'Garage' })
    ).toBeVisible()

  })

  test('Should show error when Name is empty', async () => {

    await registrationPage.blurName()

    await expect(
      registrationPage.getValidationMessage('Name required')
    ).toBeVisible()

  })

  test('Should show error when Name contains invalid characters', async () => {

    await registrationPage.fillName('123')
    await registrationPage.blurName()

    await expect(
      registrationPage.getValidationMessage('Name is invalid')
    ).toBeVisible()

  })

  test('Should show error when Name has less than 2 characters', async () => {

    await registrationPage.fillName('A')
    await registrationPage.blurName()

    await expect(
      registrationPage.getValidationMessage(
        'Name has to be from 2 to 20 characters long'
      )
    ).toBeVisible()

  })

  test('Should show error when Email is empty', async () => {

    await registrationPage.blurEmail()

    await expect(
      registrationPage.getValidationMessage('Email required')
    ).toBeVisible()

  })

  test('Should show error when Email is incorrect', async () => {

    await registrationPage.fillEmail('test')
    await registrationPage.blurEmail()

    await expect(
      registrationPage.getValidationMessage('Email is incorrect')
    ).toBeVisible()

  })

})