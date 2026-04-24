#language: pt

Funcionalidade: Administração de livros Hub de leitura

Como administrador do sistema
Quero adicionar, editar e remover múltiplos livros de uma só vez
Para que eu possa gerenciar o catálogo de forma rápida e eficiente

Cenário: Adicionar novos livros com tabela de exemplos
    Dado que eu estou na página de administrador de livros
    Quando eu adiciono novos livros com os seguintes dados: 
    | titulo | autor | categoria | exemplares |
    | Livro teste 1 | Autor teste 1 | Terror | 50 |
    | Livro teste 2 | Autor teste 2 | Aventura | 20 |
    | Livro teste 3 | Autor teste 3 | Infantil | 10 |
    Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

@only
Esquema do Cenário: Adicionar livros usando esquema do cenário - Livro: "<titulo>"
    Dado que eu estou na página de administrador de livros
    Quando eu adiciono um livro com o "<titulo>", "<autor>", "<categoria>" e "<exemplares>"
    Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

    Exemplos:
    | titulo | autor | categoria | exemplares |
    | Livro teste 4 | Autor teste 4 | Terror | 10 |
    | Livro teste 5 | Autor teste 5 | Aventura | 20 |
    | Livro teste 6 | Autor teste 6 | Infantil | 30 |