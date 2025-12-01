class Pessoa {
    constructor(){
        this.nome = ''
        this.idade = 0
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

class Aluno extends Pessoa {
    #matricula 

    constructor() {
        super()
        this.#matricula = ''
    }

    getMatricula() {
        return this.#matricula
    }

    setMatricula(matr) {
        this.#matricula = matr
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos e minha matrícula é ${this.getMatricula()}`
    }
}

class Professor extends Pessoa {
    constructor() {
        super()
        this.disciplina = ''
    }

    apresentar() {
        return `Olá, sou o Professor ${this.nome}, leciono ${this.disciplina} e tenho ${this.idade} anos.`
    }
}