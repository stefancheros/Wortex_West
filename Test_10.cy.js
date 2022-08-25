describe('Test 10', () => {
  it('Drag and Drop', () => {
    cy.visit('https://jira.trungk18.com/project/board/index.html')
    cy.wait(2000)

/*    const dataTransfer = new DataTransfer();
    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').trigger('dragstart', {
    dataTransfer
    });
    cy.get('#InProgress').trigger('drop', {
    dataTransfer
    })
    //cy.get('#Selected')//trigger('dragstart',{dataTransfer})

    it('drag drop', () => {
    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').drag('#Selected')
    });*/
    cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue').trigger('mousedown')
    cy.get('#Selected').trigger('mouseup')

  })
})