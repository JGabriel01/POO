//Usando JSON
let strJSON = `[{"nome": "caneta", "preco": 3.00},
{"nome": "caderno", "preco": 30.00},
{"nome": "bola", "preco": 100.00}]`

let compras = JSON.parse(strJSON) //transforma string em objeto

for (let i = 0; i < compras.length; i++) {
    console.log(`${compras[i].nome} - ${compras[i].preco}`)
}

let baratos = compras.filter(p => p.preco < 10)

console.log("\nAbaixo de 10 reais!!!")
baratos.forEach(p => console.log(`${p.nome} - ${p.preco}`))

console.log("\nProdutos que iniciam com c")
let c = compras.filter(p => p.nome[0].toLowerCase() === "c")
c.forEach(p => console.log(`${p.nome} - ${p.preco}`))

console.log("\nProdutos que iniciam com bo!!")
let b = compras.filter(p => p.nome.startsWith("bo"))
b.forEach(p => console.log(`${p.nome} - ${p.preco}`))

console.log("Json:" + JSON.stringify(c)) //stringfy transforma objetos em strings 
//para usar os comandos do JSON (stringfy e parse) usamos o comando JSON.(...) antes.