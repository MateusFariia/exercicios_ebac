/// <reference types="cypress" />
let dadosLogin

import { faker } from '@faker-js/faker';
import produtoPage from "../support/page_objects/compra.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
  });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    produtoPage.visitarUrl()
    cy.fixture('produtos').then(dados => {
        dados.slice(0,4).forEach(produtoSl => {
            produtoPage.buscarProduto(produtoSl.nomeProduto)
            produtoPage.addProdutoCarrinho(
                produtoSl.cor,
                produtoSl.tamanho,
                produtoSl.quantidade)
        })
    })
    produtoPage.carrinhoUrl()
    cy.get('.checkout-button').click()
    cy.get('#billing_address_1').clear().type(faker.location.streetAddress())
    cy.get('#billing_address_2').clear().type(faker.location.secondaryAddress())
    cy.get('#billing_city').clear().type(faker.location.city())
    cy.get('#billing_postcode').clear().type(faker.location.zipCode('########'))
    cy.get('#billing_phone').clear().type(faker.number.int('#########'))
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.wait(2000)
    cy.get('.woocommerce-notice').should('exist')
    });


})