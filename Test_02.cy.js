describe('Test 2', () => {
  it('Settings', () => {
   cy.visit('https://jira.trungk18.com/project/settings')

   // Name is not empty
   cy.get(':nth-child(1) > .form-input').should('have.value','Angular Jira Clone');

   // URL is correct
   cy.get(':nth-child(2) > .form-input').should('have.value', 'https://github.com/trungk18/jira-clone-angular');

   // Description (adding something new)
   cy.get(':nth-child(4) > .form-input').clear();
   cy.get(':nth-child(4) > .form-input').type('This is automation test done by Stefan');
   // cy.get(':nth-child(4) > .form-input').should('have.value', 'This is automation test done by Stefan');

   // Save settings and go back to board
   cy.get('[classname="btn-primary mr-2"] > .btn > span').click()

   // Pop-up check
   cy.get('.ant-notification-notice-content.ng-star-inserted > .ant-notification-notice-content > .ant-notification-notice-with-icon')
   .contains('Changes have been saved successfully.')

   // Cancel entry and check if it's back to home screen
   cy.wait(1000)
   cy.get('[classname="btn-empty"] > .btn > span').click()
   cy.url().should('include', 'https://jira.trungk18.com/project/board')

  })
})
