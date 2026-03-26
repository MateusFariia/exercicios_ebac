/// <reference types="cypress" />

class loginPage {
    get #iconUsuario() {return cy.get('.icon-user-unfollow')}
    get #email() {return cy.get('[name="username"]')}
    get #senha() {return cy.get('.woocommerce-form > :nth-child(2) > [name="password"]')}
    get #btnLogin() {return cy.get('[name="login"]')}

    logar(){
        this.#iconUsuario.click()
    }

    login(email,senha){
        this.#email.should('be.visible').type(email)
        this.#senha.should('be.visible').type(senha)
        this.#btnLogin.click()
    }
}

module.exports = new loginPage();