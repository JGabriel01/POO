const fs = require("fs")

let strJSON = fs.readFileSync("./14do05de2025/q2.json","utf-8") //lendo um arquivo json

let compras = JSON.parse(strJSON)

compras.push({nome: "resma", preco: 35.00},)

let comprasJson = JSON.stringify(compras)

fs.writeFileSync("./14do05de2025/q2.json",comprasJson) 