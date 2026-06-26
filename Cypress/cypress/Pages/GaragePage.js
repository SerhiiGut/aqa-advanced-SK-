class GaragePage {

  clickAddCar() {
    cy.contains('button', 'Add car').click()
  }

  selectBrand(brand) {
    cy.get('#addCarBrand').select(brand)
  }

  selectModel(model) {
    cy.get('#addCarModel').select(model)
  }

  typeMileage(mileage) {
    cy.get('#addCarMileage').clear().type(mileage)
  }

clickAdd() {
  cy.get('.modal-footer')
    .find('button.btn-primary')
    .should('be.visible')
    .click()
}

  addCar(brand, model, mileage) {
    this.clickAddCar()
    this.selectBrand(brand)
    this.selectModel(model)
    this.typeMileage(mileage)
    this.clickAdd()
  }

  checkCarIsVisible(carName) {
    cy.contains(carName).should('be.visible')
  }

}

export default new GaragePage()