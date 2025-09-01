let produto = {
    nomeProduto: "Smartphone XPTO",
    marca: "TechNova",
    preco: 2800,
    estoque: 50,
    especificacoes: {
        tela: "6.7 polegadas",
        armazenamento: "256 GB", 
        camera: "48 MP",
    }
}

function venderProduto(ob, quantidade) {
    let msg
    if (quantidade <= ob.estoque) {
        ob.estoque = ob.estoque - quantidade
        msg = `Venda de ${quantidade} ${ob.nomeProduto} realizada com sucesso!`
    } else {
        msg = `Estoque insuficiente.`
    }
    return msg
}

console.log(venderProduto(produto, 52))