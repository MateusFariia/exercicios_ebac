// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const loginPage = require("./pages/login.page")
const compraPage = require("./pages/comprar.page")
const checkoutPage = require("./pages/checkout.page")

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/')
    loginPage.logar()
    loginPage.login(email, senha)
})

Cypress.Commands.add('compra', () => {
    compraPage.compra()
})

Cypress.Commands.add('finalizar', (nome, sobrenome, endereco, cidade, cep, cel, email) => {
    checkoutPage.finalizar(nome, sobrenome, endereco, cidade, cep, cel, email)
})