describe('Test 3', () => {
  it('Testing not implemented', () => {

   cy.visit('https://jira.trungk18.com/project/board/index.html')
   cy.wait(2000)
   cy.contains('Releases')
   cy.get(':nth-child(4) > .link > .not-implemented').should('contain','Not implemented')

  })
})
