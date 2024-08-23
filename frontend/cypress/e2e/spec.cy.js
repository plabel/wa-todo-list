describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.intercept('GET', 'http://localhost:3000/tasks').as('getTasks')
    cy.intercept('POST', 'http://localhost:3000/tasks/create').as('createTask')
    cy.intercept('DELETE', 'http://localhost:3000/tasks/*').as('deleteTask')
    cy.wait('@getTasks')
    cy.get('#addBtn').click()
    cy.wait('@createTask')
    cy.get('.doneBtn:last').click()
    cy.wait('@deleteTask')
  })
})