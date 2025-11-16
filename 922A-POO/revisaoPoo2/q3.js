class contaBancaria {
    #saldo
    #titular

    constructor(saldo, titular) {
        this.#saldo = saldo
        this.#titular = titular
    }

    depositar(valor) {
        if (valor < 0) {
            return console.log(`Erro: não é permitido depositar valoress negativos.`)
        }
        this.#saldo += valor
    }

    sacar(valor) {
        if (valor > this.#saldo || valor < 0) {
            return console.log(`Erro: valor excede o saldo atual`)
        } else {
            this.#saldo -= valor
            return true
        }
    }
}

let c1 = new contaBancaria(300, "José")
c1.depositar(-10)
c1.sacar(310)