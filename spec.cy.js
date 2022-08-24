describe('My first Test', () => {
  it('finds the content "Type"', () => {
   cy.visit('https://example.cypress.io')

   cy.contains('type').click()

   // should be on a new URL which
   // includes '/commands/actions'

   cy.url().should('include', '/commands/actions')

   // get an input, type into it and verify
   // that the value had been updated

   cy.get('.action-email')
   .type('fake@email.com')
   .should('have.value', 'fake@email.com')
  })
})