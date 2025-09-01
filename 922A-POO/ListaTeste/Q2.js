let livro = {
    titulo: "LIVRO A",
    autor: "JJ",
    anoPublicacao: 2000,
    genero: "SSSS",
    disponivel: true
}

let livro2 = {
    titulo: "LIVRO B",
    autor: "JG",
    anoPublicacao: 2001,
    genero: "SSSSA",
    disponivel: false
}

let livro3 = {
    titulo: "LIVRO C",
    autor: "JJG",
    anoPublicacao: 2002,
    genero: "SSA",
    disponivel: true
}

let estante = [livro, livro2, livro3]
for (let i in estante) {
    if (estante[i].disponivel === true) {
 console.log(`O livro ${estante[i].titulo} do autor ${estante[i].autor} está disponível para empréstimo.`)
    }
}