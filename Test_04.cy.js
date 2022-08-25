describe('Test 4', () => {
  it('Open issue and change status, add assignee and change priority', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.wait(2000)

    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').click()
    cy.get('issue-status > .ant-dropdown-trigger > .btn > span').click()
    cy.get('.mt-3 > :nth-child(3) > .flex > .ml-3').click()

    //cy.wait(500)
    cy.get('issue-status > .ant-dropdown-trigger > .btn ')
    .should('have.value', '')
    //cy.get('[icon="times"] > .btn > .ng-star-inserted > svg').click()

    cy.wait(1000)
    cy.get('[icon="times"] > .btn > .ng-star-inserted > svg > use').click()

    cy.get(':nth-child(8) > .issue-wrap > .issue > .pb-3').click()
    cy.get('.ant-dropdown-link').click()
    cy.get('.mt-3 > :nth-child(1) > j-user > .flex > .ml-1-5').click()

    cy.get('issue-priority > .ant-dropdown-trigger > .btn').click()
    cy.get('.mt-3 > :nth-child(1) > .flex').click()
    //cy.get('.ant-dropdown > .mt-3 > :nth-child(1)').click()
    //cy.get('.mt-3 > :nth-child(1) > .flex').click()

    cy.wait(1000)
    cy.get('[icon="times"] > .btn > .ng-star-inserted > svg > use').click()

  })
})