const Periodo = require('../Periodo/Periodo');

describe('Periodo', () => {
    let periodo;

    beforeEach(() => {
        periodo = new Periodo();
    });

    test('deve adicionar um novo período à tabela', () => {
        periodo.adicionarPeriodo();
        expect(Periodo.tabela).toHaveLength(1); 
        expect(Periodo.tabela[0]).toEqual(['', '', '', '', '']); 
    });

    test('deve remover um período da tabela', () => {
        periodo.excluirPeriodo(1); 
        expect(Periodo.tabela).toHaveLength(0); 
    });

    test('deve não fazer nada se o período não existe', () => {
        expect(() => {
            periodo.excluirPeriodo(1);
        }).toThrow('Período inválido.');
    });  
});