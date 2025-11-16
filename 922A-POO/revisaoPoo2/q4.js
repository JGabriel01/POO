class endereco {
    constructor(rua, cidade, estado) {
        this.rua = rua
        this.cidade = cidade
        this.estado = estado
    }
    toString() {
        return `${this.rua}, ${this.cidade} - ${this.estado}`
    }
}

class pessoa {
    constructor(nome,rua, cidade, estado) {
        this.nome = nome
        this.endereco = new endereco(rua, cidade, estado)
    }

    exibirDadosCompletos() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Endereço: ${this.endereco.toString()}`)
    }
}

let p1 = new pessoa("Ana","Rua sei lá", "Bca", "AL")
p1.exibirDadosCompletos()