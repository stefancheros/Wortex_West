describe('Test 4', () => {
  it('Open issue', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')

    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').click()
    cy.get('issue-status > .ant-dropdown-trigger > .btn > span').click()
    cy.get('.mt-3 > :nth-child(3) > .flex > .ml-3').click()


    cy.get('issue-status > .ant-dropdown-trigger > .btn > span').should('contain', 'DONE')
    //cy.get('[icon="times"] > .btn > .ng-star-inserted > svg').click()

  })
})