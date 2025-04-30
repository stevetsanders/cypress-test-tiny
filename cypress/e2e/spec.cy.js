/// <reference types="cypress" />
describe('page', () => {
  it('does not work in sticky', () => {
    cy.visit('index.html')
    cy.get('.in-sticky').should('be.visible')
  })

  it('works without sticky', () => {
    cy.visit('index.html')
    cy.get('.not-in-sticky').should('be.visible')
  })
})
