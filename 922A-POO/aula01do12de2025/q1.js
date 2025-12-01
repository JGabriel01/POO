class Funcionario {
    #nome
    #cpf
    #salario

    constructor() {
        this.#nome = ''
        this.#cpf = ''
        this.#salario = 0.0
    }

    getBonificacao() {
        return this.#salario * 0.10
    }

    getSalario() {
        return this.#salario
    }

    setSalario(valor) {
        this.#salario = valor
    }
}

class Diretor extends Funcionario {
    #acoes

    constructor() {
        super()
        this.#acoes = 0
    }

    getBonificacao() {
        return this.getSalario() * 0.20
    }
}

let d1 = new Diretor()
d1.setSalario(50000)
console.log(d1.getBonificacao())