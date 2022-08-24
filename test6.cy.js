describe('Test 4', () => {
  it('Drag and Drop', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')

    const dataTransfer = new DataTransfer();
    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').trigger('dragstart', {
    dataTransfer
    });
    cy.get('#InProgress').trigger('drop', {
    dataTransfer
    })
    //cy.get('#Selected')//trigger('dragstart',{dataTransfer})

    it('drag drop', () => {
    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').drag('#Selected')
    });

  })
})