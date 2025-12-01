class Pessoa {
    #nome
    #idade

    constructor(){
        this.#nome = ''
        this.#idade = 0
    }

    getIdade() {
        return this.#idade
    }

    getNome() {
        return this.#nome
    }

    setNome(nome) {
        return this.#nome = nome
    }

    setIdade(idade) {
        return this.#idade = idade
    }

    apresentar() {
        return `Olá, meu nome é ${this.getNome()} e tenho ${this.getIdade()} anos.`
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
        return `Olá, meu nome é ${super.getNome()} e tenho ${super.getIdade()} anos e minha matrícula é ${this.getMatricula()}`
    }
}

class Professor extends Pessoa {
    #disciplina
    constructor() {
        super()
        this.#disciplina = ''
    }

    getDisciplina() {
        return this.#disciplina
    }

    setDisciplina(disciplina) {
        this.#disciplina = disciplina
    }

    apresentar() {
        return `Olá, sou o Professor ${super.getNome()}, leciono ${this.getDisciplina()} e tenho ${super.getIdade()} anos.`
    }
}