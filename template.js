/// <reference types="cypress" />

describe ('Tipos de Selectores', () =>{

     it("Selector por ID", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1500)
     })

})  // Cierre del describe