describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  xit('Then: I should see search results as I am typing', () => {
    // TODO: Implement this test!
  });

  it('Then: I should see snackbar when I add book to my reading list', () => {
    // Search and add books to reading list 
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

    // Checking snack bar functionality with undo action
    cy.get('button[title="Want to Read"]').eq(0).click().then(() => {
      cy.get('.mat-snack-bar-container').should('be.visible');
      cy.get('[data-testing="reading-list-item"]').should('have.length', 2);
    });
    cy.get('.mat-snack-bar-container').contains('Undo').click().then(() => { 
      cy.get('[data-testing="reading-list-item"]').should('have.length', 1);
    });
  });
});
