class Turma{
    nome;
    static listaTurma = [];

    constructor(nome){
        this.nome = nome;
        Turma.listaTurma.push(nome);
    }

    editarTurma(novoNome) {
        const indice = Turma.listaTurma.indexOf(this.nome);
        if (indice !== -1) {
            Turma.listaTurma[indice] = novoNome;
            this.nome = novoNome;
        } 
    }

    excluirTurma(excluirNome) {
        const index = Turma.listaTurma.indexOf(excluirNome);
        if (index !== -1) {
            Turma.listaTurma.splice(index, 1);
        } 
    }
}

module.exports = Turma