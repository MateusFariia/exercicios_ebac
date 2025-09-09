class produtosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
        
        cy.get('#tab-title-description > a').should('exist')
    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    adicionarProdutoCarrinho(cor, tamanho, quantidade) {
        cy.get('.button-variable-item-' + cor).click()
        cy.wait(250)
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new produtosPage()