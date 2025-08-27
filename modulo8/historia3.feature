            #language: pt

            Funcionalidade: Tela de cadastro
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu acesse a página de conclusão de cadastro

            Cenário: Cadastro de todos os campos obrigatórios
            Quando for realizar a conclusão do cadastro
            Então todos os campos marcados com um asterisco devem ser preenchidos

            Esquema do Cenário: Não será permitido campo de e-mail com formato inválido
            Quando o formato do <email> não for válidos
            Então deve ser exibida <mensagem> de erro

            Exemplos:
            | email             | mensagem         |
            | mateusebac.com.br | formato inválido |
            | mateus@ebaccombr  | formato inválido |
            | @ebac.com.br      | formato inválido |

            Cenário: Cadastro de campos vazios
            Quando for realizar a conclusão do Cadastro
            Então dever ser exibida mensagem de alerta caso algum campo não obrigatório esteja vazio
