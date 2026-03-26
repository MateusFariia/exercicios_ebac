/// <reference types= "cypress" />

const {faker} = require('@faker-js/faker')
const cadastroPage = require("../support/pages/cadastro.page");
const { profilePage } = require('../support/pages/profile.page');

describe('Deve realizar o cadastro com sucesso', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });

  it('Deve realizar cadastro com sucesso', () => {
    cadastroPage.cadastrar()

    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const telefone = faker.phone.number();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    cadastroPage.dadosCadastro(nome, sobrenome, telefone, email, senha)

    profilePage.customerName().should('contain', `${nome}`)
  })
})