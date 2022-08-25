describe('Test 1', () => {
  it('Social links', () => {
   cy.visit('https://jira.trungk18.com/project/board/index.html')
   cy.wait(2000)

   // Support
   cy.get('span').contains('Support').parent().parent().parent()
      .should("have.attr", "href", "https://www.buymeacoffee.com/tuantrungvo")

   // Spotify
   cy.get('span').contains('Spotify').parent().parent().parent()
   .should("have.attr", "href", "https://github.com/trungk18/angular-spotify")

   // Tetris
   cy.get('[href="https://tetris.trungk18.com/"] > j-button > .btn > span').parent().parent().parent()
   .should("have.attr", "href", "https://tetris.trungk18.com/")

  })
})
