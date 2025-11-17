class produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = parseInt(preco)
    }
    toString() {
        return `Nome do produto: ${this.nome} - R$ ${this.preco}`
    }
}

class carrinho {
    constructor() {
        this.produtos = []
    }
    exibirCarrinho() {
        if (this.produtos.length === 0) {
            return console.log(`Nenhum produto no carrinho`)
        } else {
            console.log(`---Carrinho completo:---`)
            this.produtos.forEach(p => {
                console.log(p.toString())
            })
            console.log(`------------------------`)
        }
    }
}

class cliente {
    adicionarProdutos(carrinho, p) {
        carrinho.produtos.push(p)
    }
    totalCompra(carrinho){
        let t = 0
        carrinho.produtos.forEach(p => {
             t += parseInt(p.preco)
        })
        return `Total da compra do carrinho: R$ ${t}`
    }
}

let p1 = new produto("Bola", 30)
let p2 = new produto("escova de dente", 2)
let p3 = new produto("Bola de golfe", 15)

let c1 = new carrinho()

let cliente1 = new cliente()

cliente1.adicionarProdutos(c1,p1)
cliente1.adicionarProdutos(c1,p2)
cliente1.adicionarProdutos(c1,p3)

console.log(cliente1.totalCompra(c1))

c1.exibirCarrinho()