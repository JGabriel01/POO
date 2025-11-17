class carro {
    static totalDeCarros = 0
    #marca
    #modelo

    constructor(marca, modelo) {
        this.#marca = marca
        this.#modelo = modelo
        carro.totalDeCarros += 1
    }
} 

let c1 = new carro("fiat", "cronos")
let c2 = new carro("fiat", "cronos")
let c3 = new carro("fiat", "cronos")

console.log(carro.totalDeCarros)