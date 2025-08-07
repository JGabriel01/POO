let produto = {}
produto.nome = "lapis"
produto.preco = 2.00
let compras = []
compras.push(produto)
compras.push({nome: "caneta", preco: 3.00})
compras.push({nome: "caderno", preco: 30.00})
compras.push({nome: "bola", preco: 100.00})
console.log("Compras:")
console.log(compras)

/*
compras.forEach(produtos => console.log(`${produtos.nome} - ${produtos.preco}`))

for (let p of compras) {
    console.log(`${p.nome} - ${p.preco}`)
}

for (let i in compras) {
    console.log(`${compras[i].nome} - ${compras[i].preco}`)
}
*/

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