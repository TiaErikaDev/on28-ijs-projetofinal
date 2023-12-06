class Periodo{
    static tabela = [];

    constructor() {
        this.tabela = [];
    }
    
    adicionarPeriodo(){
        const novoPeriodo = ['','','','',''];
        Periodo.tabela.push(novoPeriodo);
    }

    excluirPeriodo(periodo) {
        if (periodo >= 1 && periodo <= this.tabela.length) {
            Periodo.tabela.splice(periodo - 1, 1);
        } else {
            throw new Error('Período inválido.');
        }
    }       
}

module.exports = Periodo