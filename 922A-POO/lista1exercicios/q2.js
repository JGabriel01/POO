let livro = {
    titulo: "Star Wars",
    autor: "George Lucas",
    anoPublicacao: 2000,
    genero: "ficção científica",
    disponivel: true,
}

let livro2 = {
    titulo: "Harry Potter",
    autor: "J. K Rowling",
    anoPublicacao: 2010,
    genero: "aventura",
    disponivel: false,
}

let livro3 = {
    titulo: "Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1954,
    genero: "aventura",
    disponivel: true,
}

let estante = [livro, livro2, livro3]
for (let i in estante) {
    if (estante[i].disponivel === true) {
        console.log(`O livro ${estante[i].titulo} do autor ${estante[i].autor} está disponível para empréstimo`)
    }
}