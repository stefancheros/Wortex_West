describe('Test 5', () => {
  it('Makes a comment in an issue', () => {
     cy.visit('https://jira.trungk18.com/project/board/index.html')

        cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').click()
        cy.get('.editing-area > .cdk-textarea-autosize').type('This is automation test done by Stefan');
        cy.get('.flex > :nth-child(1) > .btn').click()
        cy.get('issue-comment.ng-star-inserted > .relative > .pl-10').should('contain', 'This is automation test done by Stefan');




  })
})