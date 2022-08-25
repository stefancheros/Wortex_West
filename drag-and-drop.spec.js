describe("Drag and Drop", () => {
 
    beforeEach(() => {
      cy.visit('/lists/drag-and-drop');
    });
   
    it('should drag visit beach to the to-do list', () => {
      cy.get('#visit-beach').drag('#todo-list');
    });
   
  });