describe('Test 6', () => {
  it('Filter implementation', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.wait(2000)
    //Count issues
    cy.get(':nth-child(4) > .status-list > .px-3').should('contain','7')

    cy.get(':nth-child(4) > .btn > span').click()

    //Count issues
    cy.get(':nth-child(4) > .status-list > .px-3').should('contain','0')


    cy.wait(1000)
    cy.get('.mt-6 > .items-center > j-button > .btn').click()


    //Count issues
    cy.get(':nth-child(1) > .status-list > .px-3').should('contain','3')
    cy.get(':nth-child(2) > .status-list > .px-3').should('contain','2')
    cy.get(':nth-child(3) > .status-list > .px-3').should('contain','4')
    cy.get(':nth-child(4) > .status-list > .px-3').should('contain','7')

    cy.get(':nth-child(3) > .btn > span').click()

    cy.get(':nth-child(1) > .status-list > .px-3').should('contain','2')
    cy.get(':nth-child(2) > .status-list > .px-3').should('contain','1')
    cy.get(':nth-child(3) > .status-list > .px-3').should('contain','3')
    cy.get(':nth-child(4) > .status-list > .px-3').should('contain','6')

    cy.get('.mt-6 > .items-center > j-button > .btn').click()

  })
})