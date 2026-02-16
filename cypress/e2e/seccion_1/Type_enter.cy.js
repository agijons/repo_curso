/// <reference types="cypress" />

describe ('Funciones para Type', () =>{

     it("Type ENTER", () =>{
        cy.visit("https://www.google.com")
        cy.title().should('eq', "Google")
        cy.wait(1500)

        cy.get("[name='q']").type("cypress io {enter}") 

        cy.get("#_WzmLae3eM6Xi7M8PnuzpiQI_40").click()
     })

})  // Cierre del describe