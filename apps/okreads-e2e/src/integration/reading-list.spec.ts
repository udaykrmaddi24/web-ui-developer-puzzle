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

  it('Then: I should see my mark as finished in reading list', () => {
    // Search and add books
    cy.get('input[type="search"]').type('java');

    cy.get('form').submit();

    cy.get('button[title="Want to Read"]').eq(0).click();
    cy.get('button[title="Want to Read"]').eq(1).click();

    // Checking reading list
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );

    cy.get('[data-testing="finish-btn"]').eq(0).click(); // marking first book as finished
    cy.get('[data-testing="finish-label"]').should('be.visible'); // it should display the finish label

    cy.get('[data-testing="finish-btn"]').eq(1).click(); // marking second book as finished
    cy.get('[data-testing="finish-label"]').should('be.visible'); // it should display the finish label

    cy.get('[data-testing="remove-btn"]').eq(1).click(); // removing the  second book which is already marked as finish, will check this status in search view

    cy.get('[data-testing="btn-name"]').eq(0).should('contain.text', 'Finished'); // book which is marked as finished

    cy.get('[data-testing="btn-name"]').eq(1).should('contain.text', 'Want to Read'); // book which is marked as finished but removed from the list

    cy.get('[data-testing="btn-name"]').eq(1).should('not.be.disabled'); // book which is marked as finished but removed from the list and it should be active
  });
});
