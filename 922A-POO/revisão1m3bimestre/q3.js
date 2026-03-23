class pagamento {
    processar(valor) {
        console.log(`Processando pagamento de R$ ${valor}`)
    }
}

class pagamentoPix extends pagamento {
    processar(valor) {
        console.log(`Processando pagamento de R$ ${valor - valor * 0.1}`)
    }
}

class pagamentoCartao extends pagamento {
    processar(valor) {
        console.log(`Processando pagamento de R$ ${valor + valor * 0.5}`)
    }
}

class pagamentoBoleto extends pagamento {
    processar(valor) {
        console.log(`Aguardando compensação do boleto de valor R$ ${valor}`)
    }
}

let p = [new pagamentoPix(), new pagamentoCartao(), new pagamentoBoleto()]
p.forEach(pagamento => pagamento.processar(100))