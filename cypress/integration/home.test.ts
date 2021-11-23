describe('tretton37 ninjas app', () => {
  beforeEach(() => {
    cy.intercept('GET', '/v3/employees', {
      fixture: 'employees',
    }).as('GETemployees');

    cy.visit('/');
    cy.wait('@GETemployees');
  });

  it('should load the page', () => {
    cy.visit('/');
    cy.findAllByText(/the fellowship of the tretton37/i).should(
      'have.length',
      1
    );
  });

  it('should have search bar', () => {
    cy.get('input').should('have.length', 1);
  });

  it('should display employee cards', () => {
    cy.get('[data-cy="employee-card"]').should('have.length.above', 0);
  });

  describe('Cards', () => {
    it('should display employee name', () => {
      cy.get('[data-cy="employee-card"]').first().contains('Eunice Langston');
    });

    it('should display employee office', () => {
      cy.get('[data-cy="employee-card"]').first().contains('Helsingborg');
    });

    it('should have link to github', () => {
      cy.get('[data-cy="employee-card"]')
        .first()
        .find('a[href^="https://github.com"]')
        .should('have.length', 1);
    });

    it('should have link to twitter', () => {
      cy.get('[data-cy="employee-card"]')
        .first()
        .find('a[href^="https://twitter.com"]')
        .should('have.length', 1);
    });

    it('should have link to linkedin', () => {
      cy.get('[data-cy="employee-card"]')
        .first()
        .find('a[href^="https://linkedin.com"]')
        .should('have.length', 1);
    });
  });

  describe('Filtering', () => {
    it('should be possible to filter by name', () => {
      cy.get('input').type('Nelle Jenkison');
      cy.get('[data-cy="employee-card"]').should('have.length', 1);
    });

    it('should be possible to filter by office', () => {
      cy.get('input').type('Helsingborg');
      cy.get('[data-cy="employee-card"]').should('have.length.above', 0);
      cy.findAllByText(/stockholm/i).should('have.length', 0);
    });
  });

  describe('Infinity scroll', () => {
    it('should display more employees when scrolled to bottom', () => {
      cy.get('[data-cy="employee-card"]')
        .its('length')
        .then((initialAmountOfEmployees) => {
          cy.scrollTo('bottom');
          cy.get('[data-cy="employee-card"]').should(
            'have.length.above',
            initialAmountOfEmployees
          );
        });
    });
  });
});
