describe('Test 9', () => {
  it('Tooltip', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.wait(2000)
    cy.get('.navbarLeft-content > :nth-child(5)').trigger('mouseover')
    //cy.get('.popover').should('be.visible')

  })
})