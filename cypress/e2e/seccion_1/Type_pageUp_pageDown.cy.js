/// <reference types="cypress" />

describe ('Ejemplo de Type pageUp, pageDown', () =>{

     it("Type pageUp", () =>{
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1000)

        cy.get("#inputName").type('{pageup}')
        cy.wait(1000)
     })
     
     it.only("Type pageDown", () =>{
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1000)

        cy.get("#inputName").type('{pagedown}')
        cy.wait(1000)
     })

})  // Cierre del describe