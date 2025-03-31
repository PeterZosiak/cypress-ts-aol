/// <reference types="cypress" />
import loginPage from "../pages/login.page"
import homePage from "../pages/home.page"

Cypress.Commands.add('loginAol', (email, password) => {
  const login = () => {
    cy.session('login', () => {
      cy.visit('/', { timeout: 90000 })
      loginPage.login(email, password)
    }, { cacheAcrossSpecs: true })
  }
  login()

  cy.visit('/', { timeout: 90000 })
  homePage.logo().should('be.visible', { timeout: 30000 })
  cy.url().should('include', Cypress.config().baseUrl)
})

declare global {
  namespace Cypress {
    interface Chainable {
      loginAol(email: string, password: string): Chainable<void>
    }
  }
}