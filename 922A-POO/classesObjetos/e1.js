class Livro {
    constructor() {
        this.titulo = "",
        this.autor = "",
        this.ano = 0
    }
    descricao() {
        return `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`
    }
}

let livro1 = new Livro()
livro1.titulo = "Livro Qualquer"
livro1.autor = "Autor"
livro1.ano = 2000

console.log(livro1)

let livro2 = new Livro()
livro2.titulo = "Sei lá"
livro2.autor = "Anônimo"
livro2.ano = 2020

console.log(livro2)

console.log(livro2.descricao())

class aluno {
    constructor() {
        this.nome = "",
        this.idade = 0,
        this.turma = ""
    }
}

let a1 = new aluno()
a1.nome = "asasaasas"
a1.idade = 15
a1.turma = "922A"

console.log(a1)

let a2 = new aluno()
a2.nome = "agsgga"
a2.idade = 18
a2.turma = "293A"

console.log(a2)

let a3 = new aluno()
a3.nome = "asjjsa"
a3.idade = 20
a3.turma = "891A"

console.log(a3)