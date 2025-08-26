#language: pt

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login na plataforma  
Para visualizar meus pedidos

Contexto:
Dado que eu acesse a página de login da EBAC-SHOP

Cenário: Dados válidos
Quando eu digitar um usuário e senha válidos
Então serei direcionado para a tela de checkout

Cenário: Dados inválidos
Quando eu digitar um usário e senha inválidos
Então deve exibir uma mensagem de alerta: "Usuário ou senha inválidos"