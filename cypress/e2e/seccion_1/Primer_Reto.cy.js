/// <reference types="cypress" />

require('cypress-plugin-tab')

describe ('Primer Reto', () =>{

     it("Realizando primer reto", () =>{
        //Entrando y validando la pagina
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1500)

        //Poniendo el nombre "Cierra" en la barra de busqueda y limpandola
        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        //Clickando en el boton de añadir
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1500)

        //Rellenando form
        cy.get("firstName").should("be.visible").type("Alejandro").tab().type("Gijon").tab().type("alejandro@gmail.com").tab().type("22").tab().type("900").tab().type("QA").tab().click()

        //Editar un campo
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1500)
        cy.get("#age").should("be.visible").clear().type("40").tab().clear().type("15000").tab().tab().click()

        //Eliminar un campo
        cy.get("#delete-record-2").should("be.visible").click()

     })

})  // Cierre del describe