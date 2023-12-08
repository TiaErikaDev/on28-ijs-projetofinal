const Periodo = require('../Periodo/Periodo');
const Disciplina = require('../Disciplina/Disciplina');

class Horario {
    static adicionarDisciplina(disciplina, aulasPorSemana) {
        for (let i = 0; i < Periodo.tabela.length && aulasPorSemana > 0; i++) {
            for (let j = 0; j < Periodo.tabela[i].length && aulasPorSemana > 0; j++) {
                if (Periodo.tabela[i][j] === '') {
                    Periodo.tabela[i][j] = disciplina.nome;
                    aulasPorSemana--;
                    Disciplina.listaDisciplina.push(disciplina);
                }
            }
        }
    }

    static bloquearDisciplina(periodo, coluna) {
        if (periodo <= 0 || periodo > Periodo.tabela.length || coluna <= 0 || 
            coluna > Periodo.tabela[periodo - 1].length) {
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
                    }
                }
            }
        } else {
            Periodo.tabela[periodo - 1][coluna - 1] = 'Bloqueado';
            console.log(`Célula ${coluna} do período ${periodo} bloqueada.`);
        }
    }
    exibirHorario(){
        console.log(Periodo.tabela)
    }
}

module.exports = Horario