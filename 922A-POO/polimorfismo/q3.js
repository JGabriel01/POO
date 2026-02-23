class pagamento {
    processar(valor){
        return "Processando Pagamento de R$ " + valor
    }
}

class pagamentoPix extends pagamento {
    constructor() {
        super()
    }
    processar(valor) {
        return "Processando Pagamento de R$ " + (valor - valor * 0.10)
    }
}

class pagamentoCartao extends pagamento {
    constructor() {
        super()
    }
    processar(valor) {
        return "Processando Pagamento de R$ " + (valor + valor * 0.05) 
    }
}

class pagamentoBoleto extends pagamento {
    constructor() {
        super()
    }
    processar(valor) {
        return "Aguardando compensação de pagamento do boleto de R$ " + valor 
    }
}

let PP = new pagamentoPix()
let PC = new pagamentoCartao()
let PB = new pagamentoBoleto()

console.log(PP.processar(100))
console.log(PC.processar(100))
console.log(PB.processar(100))