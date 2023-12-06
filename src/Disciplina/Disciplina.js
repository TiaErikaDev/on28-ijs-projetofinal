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
        this.professor = null;
        this.turma = null;
    }
    
    associarProfessor(nomeProfessor) {
        this.professor = nomeProfessor;
    }
    associarTurma(nomeTurma) {
        this.turma = nomeTurma;
    }

    criarDisciplina(nome, cargaHoraria, nomeProfessor, nomeTurma){
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        let professorEncontrado = Professor.listaProfessor.find(professor => professor === nomeProfessor);
        this.associarProfessor(professorEncontrado);        
        let turmaEncontrada = Turma.listaTurma.find(turma => turma === nomeTurma);
        this.associarTurma(turmaEncontrada);
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

    adicionarDisciplina(disciplina, aulasPorSemana) {
        for (let i = 0; i < Periodo.tabela.length && aulasPorSemana > 0; i++) {
            for (let j = 0; j < Periodo.tabela[i].length && aulasPorSemana > 0; j++) {
                if (Periodo.tabela[i][j] === '') {
                    Periodo.tabela[i][j] = disciplina;
                    aulasPorSemana--;
                }
            }
        }
        console.log(`Disciplina "${disciplina}" adicionada.`);
        console.log(Periodo.tabela)
    }

    bloquearHorario(periodo, coluna) {
        if (periodo <= 0 || periodo > Periodo.tabela.length || coluna <= 0 || coluna > Periodo.tabela[periodo - 1].length) {
            console.log('Índices inválidos!');
            return;
        }
        const celula = Periodo.tabela[periodo - 1][coluna - 1];
        if (celula !== '') {
            for (let i = periodo - 1; i < Periodo.tabela.length; i++) {
                for (let j = (i === periodo - 1 ? coluna : 0); j < Periodo.tabela[i].length; j++) {
                    if (Periodo.tabela[i][j] === '') {
                        Periodo.tabela[i][j] = celula;
                        Periodo.tabela[periodo - 1][coluna - 1] = 'Bloqueado';
                        return console.log(Periodo.tabela);
                    }
                }
            }
        } else {
            Periodo.tabela[periodo - 1][coluna - 1] = 'Bloqueado';
            console.log(`Célula ${coluna} do período ${periodo} bloqueada.`);
        }
    }
}

module.exports = Disciplina