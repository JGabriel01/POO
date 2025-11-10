class carro {
    static totalDeCarrosCriados = 0
    #marca
    #modelo

    constructor(marca, modelo) {
        this.#marca = marca
        this.#modelo = modelo
        carro.totalDeCarrosCriados += 1
    }
}

let carro1 = new carro("fiat", "Cronos")
let carro2 = new carro("fiat", "Argo")
let carro3 = new carro("fiat", "Strada")

console.log(carro.totalDeCarrosCriados)