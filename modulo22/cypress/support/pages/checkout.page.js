/// <reference types="cypress" />

class checkoutPage {
    get #nome() {return cy.get('[name="billing_first_name"]')}
    get #sobrenome() {return cy.get('[name="billing_last_name"]')}
    get #endereco() {return cy.get('[name="billing_address_1"]')}
    get #cidade() {return cy.get('[name="billing_city"]')}
    get #cep() {return cy.get('[name="billing_postcode"]')}
    get #cel() {return cy.get('[name="billing_phone"]')}
    get #email() {return cy.get('[name="billing_email"]')}
    get #termos() {return cy.get('[name="terms"]')}
    get #compra() {return cy.get('[name="woocommerce_checkout_place_order"]')}

    finalizar(nome, sobrenome, endereco, cidade, cep, cel, email){
        this.#nome.clear().type(nome)
        this.#sobrenome.clear().type(sobrenome)
        this.#endereco.clear().type(endereco)
        this.#cidade.clear().type(cidade)
        this.#cep.clear().type(cep)
        this.#cel.clear().type(cel)
        this.#email.clear().type(email)
        this.#termos.click()
        this.#compra.click()
    }
}

module.exports = new checkoutPage();