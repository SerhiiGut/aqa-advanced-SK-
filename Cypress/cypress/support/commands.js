Cypress.Commands.add('login', () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  });
});