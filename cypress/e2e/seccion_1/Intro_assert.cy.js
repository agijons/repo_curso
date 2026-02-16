/// <reference types="cypress" />

describe ('Introduccion a los assert', () =>{

     it("Demo de los Assert", () =>{
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1500)

        cy.get("#inputName").should("be.visible").type("Alejandro")
        cy.get("#inputEmail").should("be.visible").should("be.enabled").type("alejandro@gmail.com")
     })

})  // Cierre del describe