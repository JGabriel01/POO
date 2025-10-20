let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    paginas: 310
}

console.log(`O Livro ${livro.titulo} do autor ${livro.autor} tem ${livro.paginas} páginas`)


let musica = {
    nome: "Bohemian Rhaspody",
    artista: "Queen",
    duracao: 355,
    tocar: function () {
        return `Tocando agora: Bohemian Rhaspody - Queen`
    }
}

console.log(musica.tocar())

let perfil = {
    nome: "José",
    email: "jose@gmail.com",
    endereco: {
        rua: "Rua não sei",
        cidade: "sei lá"
    }
}

console.log(`Endereço antigo: ${perfil.endereco.rua} - ${perfil.endereco.cidade}`)

perfil.endereco.rua = "Rua sei não"
perfil.endereco.cidade = "lá sei"

console.log(`Endereço antigo: ${perfil.endereco.rua} - ${perfil.endereco.cidade}`)


// lista 4 terminada