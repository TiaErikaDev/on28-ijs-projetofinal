const Disciplina = require('../Disciplina/Disciplina');

describe('Disciplina class', () => {
    let disciplina;

    beforeEach(() => {
        disciplina = new Disciplina('Matemática', 4);
    });

    test('deve criar uma nova disciplina corretamente', () => {
        disciplina.criarDisciplina('Matemática', 4, 'Erika', '1A');
        expect(Disciplina.listaDisciplina).toContain(disciplina);
    });

    test('deve alterar o nome da disciplina corretamente', () => {
        disciplina.editarNomeDisciplina('Matemática Avançada');
        expect(disciplina.nome).toBe('Matemática Avançada');
    });

    test('deve excluir uma disciplina corretamente', () => {
        const disciplinaAExcluir = new Disciplina('Geografia', 3);
        disciplinaAExcluir.criarDisciplina('Geografia', 3, 'João', '2B');
        disciplinaAExcluir.excluirDisciplina('Geografia');
        expect(Disciplina.listaDisciplina).not.toContain(disciplinaAExcluir);
    });

    test('deve adicionar uma disciplina a um período corretamente', () => {
        const disciplinaAdicionada = 'Física';
        disciplina.adicionarDisciplina(disciplinaAdicionada, 2);
        expect(Disciplina.listaDisciplina).toContain(disciplina);
    });

    test('deve bloquear um horário corretamente', () => {
        const periodo = 2;
        const coluna = 3;
        disciplina.bloquearHorario(periodo, coluna);
    });
});
