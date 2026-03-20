const {calculoMDC} = require('./1-mdc');

describe('Teste de unidade para a função calculoMDC', () => {
    it('MDC de dois valores', () => {
        expect(calculoMDC(18, 60)).toBe(6)
    });

    it('Se o segundo valor for zero, deve retornar o próprio número', () => {
        expect(calculoMDC(9,0)).toBe(9);
    });

    it('Retorna 1 se os números forém números primos', () => {
        expect(calculoMDC(5, 17)).toBe(1);
    });

    it('Retorna o próprio valor se os números forem iguais', () => {
        expect(calculoMDC(26, 26)).toBe(26);
    });
    
});