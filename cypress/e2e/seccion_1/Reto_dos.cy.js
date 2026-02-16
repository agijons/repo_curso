/// <reference types="cypress" />

require('cypress-xpath')

describe ('Reto 2', () =>{

     it("Probando la aplicacion", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1500)

        cy.xpath("//input[contains(@placeholder,'Name')]").should("be.visible").type("ACE")

     })

})  // Cierre del describe