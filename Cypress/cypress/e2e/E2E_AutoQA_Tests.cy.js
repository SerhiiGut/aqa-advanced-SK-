describe('Landing Page', () => {
  const socialLinks = [
    'facebook.com',
    't.me',
    'youtube.com',
    'instagram.com',
    'linkedin.com'
  ];

  beforeEach(() => {
    cy.login();
    //contactsBtn для того щоб сайпрес спустився до потрібного блоку
    cy.contains('button', 'Contacts').as('contactsBtn');
  });

  describe('Header', () => {
    it('should display navigation elements', () => {
      cy.contains('a', 'Home').should('be.visible');
      cy.contains('button', 'About').should('be.visible');
      cy.get('@contactsBtn').should('be.visible');
    });

    it('should display authorization buttons', () => {
      cy.contains('button', 'Guest log in').should('be.visible');
      cy.get('.header_signin').should('be.visible');
    });

    it('should display logo', () => {
      cy.get('.header_logo')
        .should('be.visible')
        .and('have.attr', 'href', '/');
    });
  });

  describe('Footer', () => {
    beforeEach(() => {
      cy.get('@contactsBtn').click();
      cy.get('#contactsSection').should('be.visible');
    });

    it('should display social media links', () => {
      socialLinks.forEach((link) => {
        cy.get(`a[href*="${link}"]`)
          .should('exist')
          .and('be.visible');
      });
    });

    it('should display contact links', () => {
      cy.get('a[href="https://ithillel.ua"]')
        .should('be.visible');

      cy.get('a[href="mailto:developer@ithillel.ua"]')
        .should('be.visible');
    });
  });
});