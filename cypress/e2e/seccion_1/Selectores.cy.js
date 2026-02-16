/// <reference types="cypress" />

require ('cypress-xpath')

describe ('Tipos de Selectores', () =>{

     it("Selector por ID", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1500)

        cy.get("#userName").should("be.visible").type("Alejandro")
        cy.get("#userEmail").should("be.visible").type("alejandro@gmail.com")
     })

     it("Selector por Atributo", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1500)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Alejandro")
     })

     it("Selector por Xpath", () =>{ //Inspeccionar > click derecho > copiar > Ruta Xpath
        cy.visit("https://example.cypress.io/commands/querying")
        cy.title().should('eq', "Cypress.io: Kitchen Sink")
        cy.wait(1500)

        cy.xpath("//*[@id='inputName']").should("be.visible").type("Alejandro")
        
     })

     it("Selector por Contains", () =>{ 
        cy.visit("https://example.cypress.io/commands/actions")
        cy.title().should('eq', "Cypress.io: Kitchen Sink")
        cy.wait(1500)

        cy.get(".radio").contains('Radio one has value "radio1"').click()        
        cy.get(".radio").contains('Radio two has value "radio2". When checked, it will uncheck Radio one.').click()        
        cy.get(".radio").contains('Radio three is disabled').click()        
     })

     it.only("Selector por copySelector", () =>{ 
        cy.visit("https://example.cypress.io/commands/actions")
        cy.title().should('eq', "Cypress.io: Kitchen Sink")
        cy.wait(1500)

        cy.get('#email1').should("be.visible").type("demo@gmail.com")        
     })

})  // Cierre del describe