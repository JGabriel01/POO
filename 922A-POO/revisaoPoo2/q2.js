class aluno {
    constructor(nome, idade, matricula){
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }
    exibir() {
        return console.log(`Aluno ${this.nome}, idade: ${this.idade}, matricula: ${this.matricula}`)
    }
    mudarIdade(idadeN) {
        if (idadeN >= 5 && idadeN <= 100) {
            this.idade = idadeN
        } else {
            return console.log(`ERRO`)
        }
    }
}

let L1 = new aluno("José", 16, 1231231)
let L2 = new aluno("Joseph Stalin", 50, 1231232)
let L3 = new aluno("Pelé", 94, 1231233)

L1.exibir()
L2.exibir()
L3.exibir()

L1.mudarIdade(110)