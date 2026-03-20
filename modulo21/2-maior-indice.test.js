const {buscaIndice} = require('./2-maior-indice');

describe('Testes de unidade para a função buscaIndice', () => {
    it('Deve retornar os índices para uma lista aleatória', () => {
        const lista = [7, 59, 74, 42, 15, 2, 74, 78, 4, 7];
        const resultadoEsperado = {indiceMaior: 7, indiceMenor: 5};

        expect(buscaIndice(lista)).toEqual(resultadoEsperado);
    });

    it('Deve retornar "Lista em Branco" quando a lista estiver sem elementos', () => {
        expect(buscaIndice([])).toBe('Lista em Branco');
    });

    it('Deve retornar os índices quando a lista tiver números negativos', () => {
        const listaNegativos = [4, -3, -17, 23, 27, 4, 38];
        const resultado = {indiceMaior: 6, indiceMenor: 2};

        expect(buscaIndice(listaNegativos)).toEqual(resultado);
    });
    
});