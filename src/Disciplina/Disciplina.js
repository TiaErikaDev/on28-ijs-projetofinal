const Turma = require('../Turma/Turma'); 
const Professor = require('../Professor/Professor'); 
const Periodo = require('../Periodo/Periodo'); 

class Disciplina{
    nome;
    cargaHoraria;
    professor;
    turma;
    static listaDisciplina = [];

    constructor(nome, cargaHoraria){
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.professor;
        this.turma;
    }

    criarDisciplina(nome, cargaHoraria, nomeProfessor, nomeTurma){
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        let professorEncontrado = Professor.listaProfessor.find(professor => professor === nomeProfessor);
        this.professor = professorEncontrado;        
        let turmaEncontrada = Turma.listaTurma.find(turma => turma === nomeTurma);
        this.turma = turmaEncontrada;
        Disciplina.listaDisciplina.push(this);    
    } 

    editarNomeDisciplina(novoNome) {
        let indice = Disciplina.listaDisciplina.indexOf(this.nome);
        Disciplina.listaDisciplina[indice] = novoNome;
        this.nome = novoNome;
    }

    excluirDisciplina(excluirDisciplina) {
        let indice = Disciplina.listaDisciplina.indexOf(excluirDisciplina);
        Disciplina.listaDisciplina.splice(indice, 1);
    }
}

module.exports = Disciplina