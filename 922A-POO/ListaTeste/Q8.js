let contato = {
  nome: "Claudio",
  telefone: "8299876490",
  email: "claudio@gmail.com",
  favorito: true
}

let contato2 = {
  nome: "Almeida",
  telefone: "8299865430",
  email: "Almeida@gmail.com",
  favorito: true
}

let contato3 = {
  nome: "Ebert",
  telefone: "8299876670",
  email: "ebert@gmail.com",
  favorito: false
}

let contato4 = {
  nome: "Lucas",
  telefone: "8299886200",
  email: "Lucas@gmail.com",
  favorito: false
}
let agenda = [contato, contato2, contato3, contato4]

function listarFavoritos(arr) {
  for (let i in arr) {
    let nome 
    let telefone
    if (arr[i].favorito === true) {
      nome = arr[i].nome
      telefone = arr[i].telefone
      console.log(`O ${nome} é favorito e tem o número de telefone: ${telefone}`)
    }
  }
}

listarFavoritos(agenda)