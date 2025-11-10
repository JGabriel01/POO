class produto {
    #nome
    #preco
    #quantidadeEmEstoque
    constructor(nome, preco, qtd){
        this.#nome = nome 
        this.#preco = parseInt(preco) 
        this.#quantidadeEmEstoque = parseInt(qtd)
    }

    mostrarEstoque() {
        return console.log(`O produto ${this.#nome} custa R$${this.#preco} e possui ${this.#quantidadeEmEstoque} unidades em estoque`)
    }
}

let p1 = new produto("Pasta de dente", 12, 30)
p1.mostrarEstoque()

let p2 = new produto("Escova de dente", 1, 20)
p2.mostrarEstoque()