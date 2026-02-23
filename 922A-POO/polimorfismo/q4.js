class formaGeometrica {
    calcularArea() {
        
    }
}

class quadrado extends formaGeometrica{
    constructor(lado) {
        super()
        this.lado = lado
    }

    calcularArea() {
     return this.lado * this.lado
    }
}

class circulo extends formaGeometrica{
    constructor(raio) {
        super()
        this.raio = raio
    }

    calcularArea() {
     return Math.PI * (this.raio * this.raio)
    }
}

class retangulo extends formaGeometrica{
    constructor(base, altura) {
        super()
        this.base = base
        this.altura = altura 
    }

    calcularArea() {
        return this.base * this.altura
    }
}
let Quadrado = new quadrado(5)
let Circulo = new circulo(5)
let Retangulo = new retangulo(5,5)

let arr = [Quadrado, Circulo, Retangulo]

arr.forEach((e) => console.log(e.calcularArea()))