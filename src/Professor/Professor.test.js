const Professor = require('./Professor')

describe("Professor class ", () => {
    beforeEach(() => {
        Professor.listaProfessor = []; // Limpa a lista de turmas antes de cada teste
    });

    test('Adicionar professor', () => {
        const professor = new Professor('Erika');
        expect(Professor.listaProfessor).toEqual(['Erika']);
    });

    test('Editar professor', () => {
        const professor = new Professor('Erika');
        professor.editarProfessor('Maria');
        expect(Professor.listaProfessor).toEqual(['Maria']);
    });

    test('Excluir professor', () => {
        const professor = new Professor('Erika');
        professor.excluirProfessor('Erika');
        expect(Professor.listaProfessor).toEqual([]);
    });

    test('Excluir professor inexistente', () => {
        const professor = new Professor('Erika');
        professor.excluirProfessor('2B'); 
        expect(Professor.listaProfessor).toEqual(['Erika']);
    });
})