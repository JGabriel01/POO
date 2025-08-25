let pedido = {
    sabor: "Calabresa",
    tamanho: "Grande",
    bordaRecheada: true,
    adicionais: ["Cebola", "Azeitonas"],
    preco: 55.50,

    descreverPedido: function() {
        if (pedido.bordaRecheada === true) {
            return `"Pedido: Pizza de ${pedido.sabor}, tamanho ${pedido.tamanho}, com borda recheada e adicionais ${pedido.adicionais}. Valor: R$ ${pedido.preco}`
        } else {
            return `"Pedido: Pizza de ${pedido.sabor}, tamanho ${pedido.tamanho}, sem borda recheada e adicionais ${pedido.adicionais}. Valor: R$ ${pedido.preco}`
        }
        },
}

console.log(pedido.descreverPedido())