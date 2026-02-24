class CadastroPage {
    //Seletores

    get menuLogin() {
        return $('~Login')
    }

    get signUpMenu() {
        return $('~button-sign-up-container')
    }

    get cadastroEmail() {
        return $('~input-email')
    }
    
    get cadastroSenha() {
        return $('~input-password')
    }

    get confirmSenha() {
        return $('~input-repeat-password')
    }

    get botaoCadastro() {
        return $('~button-SIGN UP')
    }

    get emailInvalido() {
        return $('android=new UiSelector().text("Please enter a valid email address")')
    }

    get senhaInvalida() {
        return $('android=new UiSelector().text("Please enter at least 8 characters")')
    }

    get mensagem() {
        return $('id=android:id/message')
    }

    //Métodos
    async abrirMenu() {
        await this.menuLogin.click()
    }

    async abrirCadastro() {
        await this.signUpMenu.click()
    }

    async preencherCadastro(email, senha) {
        await this.cadastroEmail.clearValue()
        await this.cadastroEmail.setValue(email)
        await this.cadastroSenha.clearValue()
        await this.cadastroSenha.setValue(senha)
        await this.confirmSenha.clearValue()
        await this.confirmSenha.setValue(senha)
    }

    async confirmarCadastro() {
        await this.botaoCadastro.click()
    }

    async mensagemCadastro() {
        return await this.mensagem.getText()
    }

    async mensagemErro(texto) {
        const elemento = $(`android=new UiSelector().text("${texto}")`)
        await expect(elemento).toHaveText(texto)
    }

}

export default new CadastroPage()