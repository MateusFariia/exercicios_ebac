/// <reference types="cypress" />

class compraPage {
    get #iconCompra() {return cy.get('#primary-menu > .menu-item-629')}
    get #produto() {return cy.get('.post-2559 > .product-block')}
    get #tamanho() {return cy.get('.button-variable-item-XL')}
    get #cor() {return cy.get('.button-variable-item-Red')}
    get #adicionar() {return cy.get('.single_add_to_cart_button')}
    get #carrinho() {return cy.get('.top-cart-wishlist')}
    get #finalizar() {return cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout')}

    compra(){
        this.#iconCompra.click()
        this.#produto.click()
        this.#tamanho.click()
        this.#cor.click()
        this.#adicionar.click()
        this.#carrinho.click()
        this.#finalizar.click()
    }
}

module.exports = new compraPage();