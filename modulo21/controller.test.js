const { UsuariosController } = require('./controller');
const { Database } = require('./database');

jest.mock('./database');

describe('Controller de Usuários', () => {
    
    const respostaEsperada = [
        {
            id: 10,
            nome: 'João Carlos',
            email: 'email@teste.com'
        }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fake', () => {
        const fakeDataBase = {
            findAll: jest.fn().mockReturnValue(respostaEsperada)
        };

        const controller = new UsuariosController(fakeDataBase);
        const response = controller.getAll();

        expect(response).toBe(respostaEsperada);
        expect(fakeDataBase.findAll).toHaveBeenCalled();
    });

    it('spy', () => {
        const controller = new UsuariosController(Database);
        
        controller.getAll();

        expect(Database.findAll).toHaveBeenCalledWith('usuarios');
    });

    it('stub', () => {
        Database.findAll.mockReturnValue(respostaEsperada);
        
        const controller = new UsuariosController(Database);
        const response = controller.getAll();

        expect(Database.findAll).toHaveBeenCalledWith('usuarios');
        expect(response).toEqual(respostaEsperada);
    });

    it('mock', () => {
        Database.findAll.mockReturnValue(respostaEsperada);

        const controller = new UsuariosController(Database);
        const response = controller.getAll();

        expect(response).toEqual(respostaEsperada);
        expect(Database.findAll).toHaveBeenCalledTimes(1);
        expect(Database.findAll).toHaveBeenCalledWith('usuarios');
    });
});