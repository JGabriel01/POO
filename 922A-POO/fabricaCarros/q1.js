function cria_carro() {
    return {
    carro: {
    cor: undefined,
    modelo: undefined,
    velocidadeAtual: undefined,
    velocidadeMaxima: undefined,
    motor: {
        potencia: undefined,
        tipo: undefined
    },
    verificarVelocidade: function () {
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            return true
        }
        return false
    },
    liga: function () { 
        if (this.motor.tipo === "elétrico") {
            return "O carro está ligado mas não faz barulho."
        }
        return "O carro está ligado"
    },
    acelerar: function (qtd) {
        if (this.verificarVelocidade === true) {
            return "Velocidade Máxima atingida"
        }
         this.velocidadeAtual += qtd
         return this.velocidadeAtual
    },
    informaMarcha: function () {
        if (this.velocidadeAtual < 0) {
            return "Marcha ré"
        } 
        if (this.velocidadeAtual >= 0 && this.velocidadeAtual <= 39) {
            return "1ª marcha"
        }
        if (this.velocidadeAtual >= 40 && this.velocidadeAtual <= 79) {
            return "2ª marcha"
        }
        if (this.velocidadeAtual >= 80) {
            return "3ª marcha"
        }
    },
}
    }
}

let carro = cria_carro().carro

carro.cor = "Verde"
carro.modelo = "Fusca"
carro.velocidadeAtual = 0
carro.velocidadeMaxima = 80

let motor = carro.motor

motor.potencia = 150
motor.tipo = "Gasolina"

console.log(carro.liga())
carro.acelerar(20)
console.log(carro.velocidadeAtual)

console.log(carro.informaMarcha())
carro.acelerar(20)

console.log(carro.informaMarcha())
carro.acelerar(50)

console.log(carro.informaMarcha())
console.log(carro.velocidadeAtual)

console.log(carro.verificarVelocidade())

let carroEletrico = cria_carro().carro

carroEletrico.cor = "Prata"
carroEletrico.modelo = "model S"
carroEletrico.velocidadeAtual = 0
carroEletrico.velocidadeMaxima = 200

let motorEletrico = carroEletrico.motor

motorEletrico.tipo = "elétrico"
motorEletrico.potencia = 300

console.log(carroEletrico.liga())
console.log(carroEletrico.acelerar(200))
console.log(carroEletrico.acelerar(1))