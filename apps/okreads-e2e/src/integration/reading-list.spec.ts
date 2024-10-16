describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should see snackbar when I remove book from my reading list', () => {
    // Search and add books to reading list 
    cy.get('input[type="search"]').type('angular');
    cy.get('form').submit();
    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('button[title="Want to Read"]').eq(0).click();

  // Check reading list
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
    cy.get('[data-testing="reading-list-item"]').should('have.length', 1);

    // Checking snack bar functionality with undo action
    cy.get('[data-testing="remove-btn"]').first().click().then(() =>{
      cy.get('.mat-snack-bar-container').should('be.visible');
      cy.get('[data-testing="empty-reading-list"]').should('be.visible');
    });
    cy.get('.mat-snack-bar-container').contains('Undo').click().then(() => { 
      cy.get('[data-testing="reading-list-item"]').should('have.length', 1);
    });
  });
});
