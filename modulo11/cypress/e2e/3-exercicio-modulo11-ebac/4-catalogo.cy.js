/// <reference types="cypress"/>

//adicionando elementos de listas

describe('Funcionalidade: Catalogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    //it.skip ignora o teste

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click()({multiple:true})
    });

    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    });
    
    it('Deve clicar no último botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
        //Verificar se o front end não está com letras maiusculas diferentes do que está no elemento
    });

});