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

  it('Should create car via UI and verify it via API', () => {

    let carId

    cy.intercept('POST', '/api/cars').as('createCar')

    GaragePage.addCar(
      car.brand,
      car.model,
      car.mileage
    )

    cy.wait('@createCar').then(({ response }) => {

      expect(response.statusCode).to.eq(201)

      carId = response.body.data.id

    })

    cy.request({
      method: 'GET',
      url: '/api/cars'
    }).then(({ status, body }) => {

      expect(status).to.eq(200)

      const createdCar = body.data.find(
        item => item.id === carId
      )

      expect(createdCar).to.exist
      expect(createdCar.id).to.eq(carId)
      expect(createdCar.brand).to.eq(car.brand)
      expect(createdCar.model).to.eq(car.model)
      expect(createdCar.initialMileage).to.eq(Number(car.mileage))

    })

    GaragePage.checkCarIsVisible(
      `${car.brand} ${car.model}`
    )

  })

  it('Should create expense via API', () => {

    let carId

    cy.intercept('POST', '/api/cars').as('createCar')

    GaragePage.addCar(
      car.brand,
      car.model,
      car.mileage
    )

    cy.wait('@createCar').then(({ response }) => {

      expect(response.statusCode).to.eq(201)

      carId = response.body.data.id

      cy.createExpense(
        carId,
        car.expenseMileage,
        car.liters,
        car.totalCost
      )

    })

  })

  it('Should display created expense in UI', () => {

    let carId

    cy.intercept('POST', '/api/cars').as('createCar')

    GaragePage.addCar(
      car.brand,
      car.model,
      car.mileage
    )

    cy.wait('@createCar').then(({ response }) => {

      expect(response.statusCode).to.eq(201)

      carId = response.body.data.id

      cy.createExpense(
        carId,
        car.expenseMileage,
        car.liters,
        car.totalCost
      )

    })

    ExpensesPage.clickFuelExpenses()

    ExpensesPage.checkExpense(
      car.expenseMileage,
      car.liters,
      car.totalCost
    )

  })

})