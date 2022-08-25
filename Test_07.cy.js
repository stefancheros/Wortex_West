describe('Test 7', () => {
  it('Creating New issue', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.wait(2000)

    cy.get(':nth-child(1) > .status-list > .px-3').should('contain','3')

    cy.get(':nth-child(3) > .itemIcon > .anticon > svg').click()
    cy.get(':nth-child(3) > .form-input').type('This is automation test done by Stefan');
    cy.get('[classname="btn-primary mr-2"] > .btn').click()

    cy.get(':nth-child(1) > .status-list > .px-3').should('contain','4')

  })
})