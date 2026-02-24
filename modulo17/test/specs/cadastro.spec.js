import cadastroPage from "../pageobjects/cadastro.page";

describe('Funcionalidade: Cadastro', () => {

    beforeEach(async () => {
        await cadastroPage.abrirMenu()
        await cadastroPage.abrirCadastro()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
    });

    it('Deve fazer cadastro com sucesso', async () => {
        await cadastroPage.preencherCadastro('abcdefg@email.com', 'senha123')
        //Como o emulador que roda no meu pc é pequeno, precisei incluir esse scroll
        const size = await driver.getWindowSize();
        const meioX = size.width / 2;
        const pontoA = size.height * 0.7;
        const pontoB = size.height * 0.5;
        await driver.action('pointer')
            .move({ duration: 0, x: meioX, y: pontoA })
            .down({ button: 0 })
            .move({ duration: 1000, x: meioX, y: pontoB })
            .up({ button: 0 })
            .perform();
        await cadastroPage.confirmarCadastro()
        expect(await cadastroPage.mensagemCadastro()).toEqual('You successfully signed up!')
        await $('id=android:id/button1').click()
    });

    it('Deve falhar ao cadastrar email invalido', async () => {
        await cadastroPage.preencherCadastro('abcdefgemail.com', 'senha123')
        const size = await driver.getWindowSize();
        const meioX = size.width / 2;
        const pontoA = size.height * 0.7;
        const pontoB = size.height * 0.5;
        await driver.action('pointer')
            .move({ duration: 0, x: meioX, y: pontoA })
            .down({ button: 0 })
            .move({ duration: 1000, x: meioX, y: pontoB })
            .up({ button: 0 })
            .perform();
        await cadastroPage.confirmarCadastro()
        await cadastroPage.mensagemErro('Please enter a valid email address')
    });

    it('Deve falhar ao cadastrar com senha invalida', async () => {
        await cadastroPage.preencherCadastro('abcdefg@email.com', 'senha12')
        const size = await driver.getWindowSize();
        const meioX = size.width / 2;
        const pontoA = size.height * 0.7;
        const pontoB = size.height * 0.5;
        await driver.action('pointer')
            .move({ duration: 0, x: meioX, y: pontoA })
            .down({ button: 0 })
            .move({ duration: 1000, x: meioX, y: pontoB })
            .up({ button: 0 })
            .perform();
        await cadastroPage.confirmarCadastro()
        await cadastroPage.mensagemErro('Please enter at least 8 characters')
    });

});