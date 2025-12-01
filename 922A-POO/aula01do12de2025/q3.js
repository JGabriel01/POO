class Transporte {
    calcularFrete(distancia) {
        return distancia * 1
    }
}

class transporteExpresso extends Transporte {
    constructor() {
        super()
    }

    calcularFrete(distancia) {
        return super.calcularFrete(distancia) + 50
    }
}

class transporteVip extends Transporte {
    constructor() {
        super()
    }

    calcularFrete(distancia) {
        return super.calcularFrete(distancia) * 2
    }
}