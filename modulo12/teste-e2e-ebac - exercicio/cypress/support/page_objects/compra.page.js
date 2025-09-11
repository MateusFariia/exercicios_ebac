class produtoPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    addProdutoCarrinho(cor, tamanho, quantidade) {
        cy.get('.button-variable-item-' + cor).click()
        cy.wait(250)
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    carrinhoUrl() {
        cy.visit('carrinho')
    }

}

export default new produtoPage()