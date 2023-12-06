const Professor = require('./Professor/Professor');
const Turma = require('./Turma/Turma');
const Periodo = require('./Periodo/Periodo');
const Disciplina = require('./Disciplina/Disciplina');

//criação de Professores
const professor1 = new Professor("Erika");
const professor2 = new Professor("Julia");
const professor3 = new Professor("Beatriz");

console.log(Professor.listaProfessor);

//criação de Turmas
const turma1 = new Turma("1A");
const turma2 = new Turma("1B");
const turma3 = new Turma("2A");

console.log(Turma.listaTurma);

//criação de Periodos
const periodo1 = new Periodo();
periodo1.adicionarPeriodo();
periodo1.adicionarPeriodo();
periodo1.adicionarPeriodo();

console.log(Periodo.tabela)

//criação de Disciplinas
const disciplina1 = new Disciplina()
disciplina1.criarDisciplina("Biologia", 2, "Erika", "1A")
const disciplina2 = new Disciplina()
disciplina1.criarDisciplina("Matematica", 4, "Julia", "1B")
const disciplina3 = new Disciplina()
disciplina1.criarDisciplina("Portugues", 4, "Beatriz", "2A")

disciplina1.adicionarDisciplina("Biologia", 2)
disciplina2.adicionarDisciplina("Matematica", 4)
disciplina3.adicionarDisciplina("Portugues", 4)
disciplina3.adicionarDisciplina("Ingles", 2)

disciplina2.bloquearHorario(2,2)