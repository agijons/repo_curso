/// <reference types="cypress" />

require('cypress-plugin-tab')

describe ('Ejemplo funcion Tab', () =>{

     it("Type con tab", () =>{
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1500)
        
        cy.get("#inputName").type("Alejandro").tab().type("alejandro@gmail.com").tab().type("pwd")
    })

})  // Cierre del describe