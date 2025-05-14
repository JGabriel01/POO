const fs = require("fs")

let strJSON = fs.readFileSync("q2.json","utf-8") //lendo um arquivo json

let compras = JSON.parse(strJSON)

compras.push({nome: "resma", preco: 35.00},)

let comprasJson = JSON.stringify(compras)

fs.writeFileSync("q2.json",comprasJson) 