class Professor{
    nome;
    static listaProfessor = [];

    constructor(nome){
        this.nome = nome;
        Professor.listaProfessor.push(nome);
    }

    editarProfessor(novoNome) {
        const indice = Professor.listaProfessor.indexOf(this.nome);
        if (indice !== -1) {
            Professor.listaProfessor[indice] = novoNome;
            this.nome = novoNome;
        }
    }

    excluirProfessor(excluirNome) {
        const index = Professor.listaProfessor.indexOf(excluirNome);
        if (index !== -1) {
            Professor.listaProfessor.splice(index, 1);
        } 
    }
}

module.exports = Professor