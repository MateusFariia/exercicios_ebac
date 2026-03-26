/// <reference types="cypress"/>

const { email, senha , nome, sobrenome, endereco, cidade, cep, cel} = require('../fixtures/data.json');
const { confirmPage } = require('../support/pages/confirm.page');

describe('Fluxo de Checkout', () => {

    it('Deve realizar o fluxo completo de carrinho de compras', () => {
        cy.login(email, senha)
        cy.compra()
        cy.finalizar(nome, sobrenome, endereco, cidade, cep, cel, email)
        confirmPage.confirm().should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
    
});