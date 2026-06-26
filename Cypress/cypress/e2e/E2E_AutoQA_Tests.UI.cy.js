import GaragePage from '../pages/GaragePage'
import ExpensesPage from '../pages/ExpensesPage'

describe('Garage', () => {

  let car

  before(() => {
    cy.fixture('car').then((data) => {
      car = data
    })
  })

  beforeEach(() => {
    cy.login(
      Cypress.env('email'),
      Cypress.env('password')
    )
  })

  it('Should add car and fuel expense', () => {

    // Add car
    GaragePage.addCar(
      car.brand,
      car.model,
      car.mileage
    )

    GaragePage.checkCarIsVisible(
      `${car.brand} ${car.model}`
    )

    // Add fuel expense
    ExpensesPage.addExpense(
      `${car.brand} ${car.model}`,
      car.expenseMileage,
      car.liters,
      car.totalCost
    )

    ExpensesPage.checkExpenseIsVisible(
      car.totalCost
    )

  })

})