class produto {
    #nome
    #preco
    #quantidade
    constructor(nome, preco, quantidade) {
        this.#nome = nome
        this.#preco = preco 
        this.#quantidade = quantidade
    }
    mostrarEstoque() {
        return console.log(`O produto ${this.#nome} custa R$ ${this.#preco} e possui ${this.#quantidade} unidades em estoque`)
    }
}

let p1 = new produto("Escova", 20, 50)
let p2 = new produto("escova de dente", 2, 60)


p1.mostrarEstoque()
p2.mostrarEstoque()