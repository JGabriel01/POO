class livro {
    constructor (titulo, autor, id) {
        this.titulo = titulo
        this.autor = autor
        this.id = id
        this.disponivel = true
    }
    toString(){
        let status = this.disponivel? "Disponível":"Emprestado"
        return `O livro ${this.titulo} do autor ${this.autor}, tem id ${this.id} e está ${status}.`
    }
}

class usuario {
    constructor(nome, id) {
        this.nome = nome
        this.id = id
    }
}

class biblioteca {
    constructor() {
        this.acervo = []
    }
    adicionarLivro(livro) {
        let livroExistente = this.acervo.find(l => l.id === livro.id)
        if (livroExistente) {
            console.log(`Livro com id ${livro.id} já existe no acervo`)
        } else{
            this.acervo.push(livro)
            console.log(`Livro adicionado com sucesso`)
        }
    }
    emprestarLivro(id, usuario) {
        let livro = this.acervo.find(l => l.id = id)
        if (!livro) {
            console.log(`Livro com id ${id} não encontrado para empréstimo`)
        }
        if (livro.disponivel === true) {
            livro.disponivel = false
            console.log(`Livro com id ${id} foi emprestado com sucesso para o usuario com id ${usuario.id}`)
        } else {
            console.log(`livro não disponível para empréstimos`)
        }
    }
    devolverLivro(id) {
        let livro = this.acervo.find(l => l.id = id)
        if (!livro) {
            console.log(`Livro com id ${id} não encontrado para devolução`)
        }
        if (livro.disponivel === false) {
            livro.disponivel = true
            console.log(`Livro com id ${id} foi devolvido com sucesso!`)
        }       
    }
    listarLivros() {
        let livrosDisponiveis = this.acervo.filter(l => l.disponivel === true)
        if (livrosDisponiveis.length === 0) {
            console.log(`Nenhum livro disponível para se listar`)
        } else {
        console.log(`-- Livros Disponíveis --`);
        livrosDisponiveis.forEach(livro => {
            console.log(`${livro.toString()}`);
        });
        console.log(`------------------------`);
    } 
    }
}

let l1 = new livro("Livro1", "Js", 1)
let l2 = new livro("Livro2", "Oj", 2)

let u1 = new usuario("José", 1)

let b1 = new biblioteca()
b1.adicionarLivro(l1)
b1.adicionarLivro(l1)
b1.adicionarLivro(l2)

b1.emprestarLivro(1, u1)
b1.emprestarLivro(1, u1)
b1.devolverLivro(1)

b1.listarLivros()