class Periodo{
    static tabela = [];

    constructor() {
        this.tabela = [];
    }
    
    diasDaSemana(){
        const semana = ['segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira']
        console.log(semana.join(', '))
    }

    adicionarPeriodo(){
        const novoPeriodo = ['','','','',''];
        Periodo.tabela.push(novoPeriodo);
    }

    excluirPeriodo(periodo) {
        if (periodo >= 1 && periodo <= Periodo.tabela.length) {
            Periodo.tabela.splice(periodo - 1, 1);
        } else {
            throw new Error('Período inválido.');
        }
    }       
}

module.exports = Periodo