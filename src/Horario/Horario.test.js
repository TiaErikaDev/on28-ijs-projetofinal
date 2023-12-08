const Disciplina = require('../Disciplina/Disciplina');
const Professor = require('../Professor/Professor');
const Turma = require('../Turma/Turma');
const Periodo = require('../Periodo/Periodo');
const Horario = require('./Horario');

describe('main class', () => {
    let horario;
    let periodo;
    let disciplina;

    beforeEach(() => {
        disciplina = new Disciplina();
        horario = new Horario();
        periodo = new Periodo();
    });

    test('deve adicionar uma disciplina à tabela de período corretamente', () => {
        const disciplinaAdicionada = new Disciplina();
        disciplinaAdicionada.criarDisciplina('Física', 4, "Erika", "1A");
        Horario.adicionarDisciplina(disciplinaAdicionada, 4);
        expect(Disciplina.listaDisciplina).toContain(disciplinaAdicionada)
    });
    
    test('deve bloquear um horário corretamente', () => {
        periodo.adicionarPeriodo();
        Horario.adicionarDisciplina('Física', 4);
        Horario.bloquearDisciplina(1, 1);
        expect(Periodo.tabela[0][0]).toBe('Bloqueado');
    });
});