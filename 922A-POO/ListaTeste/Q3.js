let pedido = {
    sabor: "Calabresa",
    tamanho: "Grande",
    bordaRecheada: true,
    adicionais: ["Cebola", "Azeitonas"],
    preco: 55.50,

    descreverPedido: () => {
        let msg = ""
        if (pedido.bordaRecheada === true) {
            msg = `Pedido: Pizza de ${pedido.sabor}, tamanho: ${pedido.tamanho}, com borda recheada e adicionais: ${pedido.adicionais}. Valor: R$ ${pedido.preco}.`
        } else {
            msg = `Pedido: Pizza de ${pedido.sabor}, tamanho: ${pedido.tamanho}, sem borda recheada e adicionais: ${pedido.adicionais}. Valor: R$ ${pedido.preco}.`
        }
        return msg
    }
}

console.log(pedido.descreverPedido())