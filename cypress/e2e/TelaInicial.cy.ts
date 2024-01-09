describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('should render template', () => {
    cy.getByData('image-logo').should('be.visible')
    cy.getByData('input-add-task').should('be.visible')
    cy.getByData('button-create-task').should('be.visible')
  })

  it('should add task', () => {
    cy.getByData('input-add-task').type('task 1')
    cy.getByData('button-create-task').click()
    cy.getByData('task').should('be.visible')
  })

  it('should remove task', () => {
    cy.getByData('input-add-task').type('task 1')
    cy.getByData('button-create-task').click()
    cy.getByData('task').should('be.visible')
    cy.wait(2000)
    cy.getByData('button-remove-task').click()
    cy.getByData('task').should('not.exist')
  })

  it('should check task', () => {
    cy.getByData('input-add-task').type('task 1')
    cy.getByData('button-create-task').click()
    cy.getByData('task').should('be.visible')
    cy.wait(4000)
    cy.getByData('task-done-length').should('have.text', '0 de 1')
    cy.getByData('button-remove-task').click()
    cy.getByData('task').should('not.exist')
    cy.getByData('task-done-length').should('have.text', '0 de 0')
  })
})
