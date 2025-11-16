class livro {
    constructor (title, autor, ano) {
        this.titulo = title
        this.autor = autor 
        this.ano = ano 
    }
    descricao() {
        return console.log(` O Livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`)
    }
}

let L1 = new livro("Livro qua", "Luiz Gonzaga", 2025)
let L2 = new livro("livro2", "autor2", 2024)

L1.descricao()
L2.descricao()