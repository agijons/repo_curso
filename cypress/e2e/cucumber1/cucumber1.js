import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('Abrir el navegador principal',()=>{
    cy.visit("https://www.google.com/")
})


When ('Cargando el nombre',()=>{
    cy.get('#APjFqb').should('be.visible').type('Alejandro')
    cy.wait(3000)
})

When ('Cargando el email',()=>{
    cy.get('#APjFqb').should('be.visible').clear().type('Alejandro')
    cy.wait(3000)
})

When ('Cargando la direccion',()=>{
    cy.get('#APjFqb').should('be.visible').clear().type('Alejandro')
    cy.wait(3000)
})

Then ('Validar el nombre de la pagina',()=>{
    cy.title().should('eq', 'Google')
    cy.wait(3000)
})