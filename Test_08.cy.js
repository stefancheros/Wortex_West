describe('Test 8', () => {
  it('Search for an issue', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.get(':nth-child(2) > .status-list > .px-3').should('contain','2')

    cy.get(':nth-child(2) > .itemIcon').click()
    cy.get('.mb-10 > j-input > .input-container > .input').type('This is automation test done by Stefan');
    cy.get('.pt-8').should('contain', 'couldn')

    cy.wait(500)
    cy.get('.mb-10 > j-input > .input-container > .input').clear()

    cy.get('.mb-10 > j-input > .input-container > .input').type('When creating')
    cy.get('issue-result.ng-star-inserted > .flex').click()
    cy.get('[icon="trash"] > .btn > .ng-star-inserted > svg').click()
    cy.get('[classname="btn-primary mr-2"] > .btn > span').click()

    cy.get(':nth-child(2) > .status-list > .px-3').should('contain','1')

    cy.get('.input').type('Each issue')

    cy.get(':nth-child(1) > .status-list > .px-3').should('contain','0')
    cy.get(':nth-child(2) > .status-list > .px-3').should('contain','1')
    cy.get(':nth-child(3) > .status-list > .px-3').should('contain','0')
    cy.get(':nth-child(4) > .status-list > .px-3').should('contain','0')

  })
})