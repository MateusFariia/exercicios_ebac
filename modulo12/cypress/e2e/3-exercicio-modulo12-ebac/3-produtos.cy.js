/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Arcadio Gym Short')
        cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve buscar produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        produtosPage.adicionarProdutoCarrinho('S', 'Red', 1)

        cy.get('.woocommerce-message').should('exist')
        
    });
    
    it('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.adicionarProdutoCarrinho(
                dados[0].cor,
                dados[0].tamanho, 
                dados[0].quantidade)

        })
        
        cy.get('.woocommerce-message').should('exist')
        
    });
});