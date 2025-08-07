let ul = document.getElementById("list")

let json = `[
    {"nome": "abacaxi", "tipo": "cítrica"},
    {"nome": "banana", "tipo": "básica"}
]`

let objJSON = JSON.parse(json)

let strVazia = ""
objJSON.forEach( f => {
  strVazia += `<li> ${f.nome} - ${f.tipo} </li>`;
})
  ul.innerHTML = strVazia;