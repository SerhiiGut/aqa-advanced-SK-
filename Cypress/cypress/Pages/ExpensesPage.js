class ExpensesPage {

  clickFuelExpenses() {
    cy.contains('Fuel expenses').click()
  }

  clickAddExpense() {
    cy.contains('button', 'Add an expense').click()
  }

  selectVehicle() {
    cy.get('#addExpenseCar')
      .find('option')
      .first()
      .then(($option) => {
        cy.get('#addExpenseCar').select($option.val())
      })
  }

  typeMileage(mileage) {
    cy.get('#addExpenseMileage')
      .clear()
      .type(mileage)
  }

  typeLiters(liters) {
    cy.get('#addExpenseLiters')
      .clear()
      .type(liters)
  }

  typeTotalCost(cost) {
    cy.get('#addExpenseTotalCost')
      .clear()
      .type(cost)
  }

  clickAdd() {
    cy.contains('.modal-footer button', 'Add').click()
  }

  addExpense(car, mileage, liters, cost) {

    this.clickFuelExpenses()
    this.clickAddExpense()

    this.selectVehicle(car)
    this.typeMileage(mileage)
    this.typeLiters(liters)
    this.typeTotalCost(cost)

    this.clickAdd()

  }

  checkExpenseIsVisible(cost) {
    cy.contains(cost)
      .should('be.visible')
  }

  checkExpense(mileage, liters, totalCost) {

    cy.contains('td', mileage)
      .should('be.visible')

    cy.contains('td', `${liters}L`)
      .should('be.visible')

    cy.contains(
      'td',
      `${Number(totalCost).toFixed(2)} USD`
    ).should('be.visible')

  }

}

export default new ExpensesPage()