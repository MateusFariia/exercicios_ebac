/// <reference types="cypress" />

describe('Cenários de teste no hub de leitura', () => {
  beforeEach(() => {
    cy.visit('/login.html')
    cy.setCookie('jwt_education_shown', 'true')
  });

  it('Deve zerar as reservas ativas', () => {
    cy.intercept('GET', 'api/reservations', {
      statusCode: 200,
      body: {
        total: 0, reservations: []
      }
    }).as('ReservaZerada')
    cy.login('usuario@teste.com', 'user123')
    cy.wait('@ReservaZerada')
    cy.get('#active-reservations').should('contain', 0)
  })

  it('Deve dar erro ao carregar o dashboard', () => {
    cy.intercept('GET', '**/api/reservations', {
      statusCode: 400,
    }).as('ErroDashboard')
    cy.login('usuario@teste.com', 'user123')
    cy.contains('Erro ao carregar informações').should('be.visible')
  })

  it('Deve deslogar e retornar à tela de login utilizando AppActions', () => {
    cy.request({
      method: 'POST',
      url: 'api/login',
      body: {
        "email": "usuario@teste.com",
        "password": "user123"
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.visit('dashboard.html')
    })

    cy.logoutApp()

    cy.url().should('include', 'login.html')
    cy.get('#login-btn').should('be.visible')
  });
})