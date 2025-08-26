#language: pt

Funcionalidade: Configurar produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto e escolher a quantidade
Para depois inserir no carrinho

Cenário: Seleções de cor, tamanho e quantidade devem ser obrigatórios
Dado que eu acesse o site da EBAC-SHOP
Quando eu adicionar um produto ao carrinho
Então deve ser necessária a seleção de cor, tamanho e quantidade

Cenário: Permitir apenas 10 produtos por venda
Dado que eu acesse o site da EBAC-SHOP
Quando eu for selecionar a quantidade de um produto
Então o máximo de itens deve ser 10

Cenário: Quando eu clicar no botão “limpar” deve voltar ao estado original
Dado que eu acesse o site da EBAC-SHOP
Quando eu clicar no botão "limpar"
Então os dados de cor, tamanho e quantidade devem voltar ao estado original