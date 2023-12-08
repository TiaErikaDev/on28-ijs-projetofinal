const Professor = require('./Professor/Professor');
const Turma = require('./Turma/Turma');
const Periodo = require('./Periodo/Periodo');
const Disciplina = require('./Disciplina/Disciplina');
const Horario = require('./Horario/Horario');

//criação de Professores
const professor1 = new Professor("Erika");
const professor2 = new Professor("Julia");
const professor3 = new Professor("Beatriz");

console.log('Lista de professores adicionados ao sistema: ');
console.log(Professor.listaProfessor);
console.log(' ');

//criação de Turmas
const turma1 = new Turma("1A");
const turma2 = new Turma("1B");
const turma3 = new Turma("2A");

console.log('Lista de turmas adicionados ao sistema: ');
console.log(Turma.listaTurma);
console.log(' ');

//criação de Periodos
console.log('Tabela de Horário: ');
const periodo1 = new Periodo();
periodo1.diasDaSemana();
periodo1.adicionarPeriodo();
periodo1.adicionarPeriodo();
periodo1.adicionarPeriodo();

//criação de Disciplinas
const disciplina1 = new Disciplina()
disciplina1.criarDisciplina("Biologia", 2, "Erika", "1A")
const disciplina2 = new Disciplina()
disciplina2.criarDisciplina("Matematica", 4, "Julia", "1B")
const disciplina3 = new Disciplina()
disciplina3.criarDisciplina("Portugues", 5, "Beatriz", "2A")

//Adicionar disciplina no horario
Horario.adicionarDisciplina(disciplina1, 2);
Horario.adicionarDisciplina(disciplina2, 4);
Horario.adicionarDisciplina(disciplina3, 5);
Horario.adicionarDisciplina(disciplina1, 2);
Horario.bloquearDisciplina(1, 2);
Horario.bloquearDisciplina(3, 3);

//Exibir horário
const horario = new Horario(); 
horario.exibirHorario();