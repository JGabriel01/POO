class formaGeometrica {
    calcularArea() {}
}

class quadrado extends formaGeometrica {
    #lado
    constructor(lado) {
        super()
        this.#lado = lado
    }

    getLado() {
        return this.#lado
    }

    setLado(valor) {
        this.#lado = valor
    }

    calcularArea() {
        super.calcularArea()
        console.log(this.#lado * this.#lado)
    }
}

class circulo extends formaGeometrica {
    constructor(raio) {
        super()
        this.raio = raio
    }

    calcularArea() {
        super.calcularArea()
        let area = Math.PI * (this.raio * this.raio)
        console.log(`Área do círculo = ${area}`)
    }
}

class retangulo extends formaGeometrica {
    constructor(base, altura) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        super.calcularArea()
        let area = this.base * this.altura
        console.log(`Área do retângulo = ${area  }`)
    }
}

let formas = [new quadrado(10), new circulo(10), new retangulo(10, 10)]
formas.forEach(forma => forma.calcularArea())

module.exports = {formaGeometrica, circulo, quadrado, retangulo}

// caso queira chamar em outro arquivo: const {FormaGeometrica, Quadrado, Circulo, Retangulo} = require('./q4.js');