/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import contrato from '../contratos/usuarios.contrato'

describe('Teste de API em Usuários', () => {

  let nome;
  let email;
  let token;
  let idUsuario;

  before(() => {
    nome = faker.person.fullName();
    email = faker.internet.email();

    cy.cadastrarEmail(nome, email, 'teste')
      .then(response => {
        expect(response.status).to.equal(201);
        idUsuario = response.body._id;
      });
  });

  beforeEach(() => {
    cy.token('fulano@qa.com', 'teste').then(tkn => {
      token = tkn;
    });
  });

  it('Deve validar contrato de usuários com sucesso', () => {
    cy.request('usuarios').then(response => {
      return contrato.validateAsync(response.body);
    });
  });

  it('Deve listar usuários com sucesso - GET', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).should(response => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
    });
  });

  it('Deve validar e-mail cadastrado anteriormente - POST', () => {
    cy.cadastrarEmail(nome, email, 'teste')
      .should(response => {
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal('Este email já está sendo usado');
      });
  });

  it('Deve editar um usuário com sucesso - PUT', () => {
    let newNome = faker.person.fullName();
    let newEmail = faker.internet.email();

    cy.request({
      method: 'PUT',
      url: `usuarios/${idUsuario}`,
      body: {
        nome: newNome,
        email: newEmail,
        password: 'teste',
        administrador: 'true'
      }
    }).should(response => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal('Registro alterado com sucesso');
    });
  });

  it('Deve deletar um usuário com sucesso - DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: `usuarios/${idUsuario}`
    }).should(resp => {
      expect(resp.status).to.equal(200);
      expect(resp.body.message).to.equal('Registro excluído com sucesso');
    });
  });

});
