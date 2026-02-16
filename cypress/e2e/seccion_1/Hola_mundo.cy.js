/// <reference types="cypress" />

describe ('Primer test con Cypress', () =>{

     it("Mi primer test -> Hola mundo", () =>{
        cy.log("Hola mundo")
        cy.wait(4000)
     })

     it("Segundo test -> campo name", () =>{
         cy.visit("https://example.cypress.io/commands/querying")

         cy.get("#inputName").type("Alejandro")
         cy.wait(4000)
         
         cy.get("#inputEmail").type("alejandro@gmail.com")
         cy.wait(4000)
         
         cy.get("#main").click()
         cy.wait(4000)

     })
})  // Cierre del describe