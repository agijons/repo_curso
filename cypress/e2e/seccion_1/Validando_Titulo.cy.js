/// <reference types="cypress" />

describe ('Seccion 1 - Validando el titulo', () =>{

     it("Test Validar el Titulo", () =>{
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')

        cy.log("La función title funcionó bien")
     })

})  // Cierre del describe