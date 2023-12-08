const Disciplina = require('../Disciplina/Disciplina');
const Professor = require('../Professor/Professor');
const Turma = require('../Turma/Turma');
const Periodo = require('../Periodo/Periodo');
const Horario = require('../Horario/Horario');

describe('Disciplina class', () => {
    let disciplina;
    let horario;
    let periodo;

    beforeEach(() => {
        disciplina = new Disciplina('Matemática', 4);
        horario = new Horario();
        periodo = new Periodo();
    });

    test('deve criar uma nova disciplina corretamente', () => {
        let professor = new Professor ('Erika');
        let turma = new Turma ('1A');
        disciplina.criarDisciplina('Matemática', 4, 'Erika', '1A');
        expect(Disciplina.listaDisciplina).toContain(disciplina);
        expect(disciplina.professor).toBe('Erika'); 
        expect(disciplina.turma).toBe('1A'); 
    });
    

    test('deve alterar o nome da disciplina corretamente', () => {
        disciplina.editarNomeDisciplina('Matemática Avançada');
        expect(disciplina.nome).toBe('Matemática Avançada');
    });

    test('deve excluir uma disciplina corretamente', () => {
        const disciplinaAExcluir = new Disciplina('Geografia', 3);
        disciplinaAExcluir.criarDisciplina('Geografia', 3, 'João', '2B');
        disciplinaAExcluir.excluirDisciplina('Geografia');
        expect(Disciplina.listaDisciplina).not.toContainEqual(disciplinaAExcluir);
    });
});
