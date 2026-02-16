/// <reference types="cypress" />

describe ('Opciones de Click', () =>{

     it("Click sencillo", () =>{
        cy.visit("https://example.cypress.io/commands/actions")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1500)

        cy.get('.well > .btn-danger').should("be.visible").click()
     })

     it("Click Force true", () =>{
        cy.visit("https://example.cypress.io/commands/actions")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1500)

        cy.get('.well > .btn-danger').should("be.visible").click({force: true})
     })

     it.only("Click por coordenadas (x,y)", () =>{
        cy.visit("https://example.cypress.io/commands/actions")
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
        cy.wait(1500)

        cy.get('.well > .btn-danger').should("be.visible").click(50,30)
     })

})  // Cierre del describe