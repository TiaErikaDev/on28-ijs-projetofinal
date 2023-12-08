const Turma = require('./Turma')

describe("Turma class ", () => {
    beforeEach(() => {
        Turma.listaTurma = []; // Limpa a lista de turmas antes de cada teste
    });

    test('Adicionar turma', () => {
        const turma = new Turma('1A');
        expect(Turma.listaTurma).toEqual(['1A']);
    });

    test('Editar turma', () => {
        const turma = new Turma('1A');
        turma.editarTurma('1B');
        expect(Turma.listaTurma).toEqual(['1B']);
    });

    test('Excluir turma', () => {
        const turma = new Turma('1A');
        turma.excluirTurma('1A');
        expect(Turma.listaTurma).toEqual([]);
    });

    test('Excluir turma inexistente', () => {
        const turma = new Turma('1A');
        turma.excluirTurma('2B'); 
        expect(Turma.listaTurma).toEqual(['1A']);
    });
})
