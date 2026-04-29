const {soma} = require('./3-soma-multiplos')

describe('Testes de unidade para a função soma', () => {
    it('Deve validar a soma dos múltiplos de 5 e 7 abaixo de 1000', () => {
        expect(soma).toBe(156361);
    });

    it('Deve validar que o número obtido é positivo', () => {
        expect(soma).toBeGreaterThan(0);
    });

});