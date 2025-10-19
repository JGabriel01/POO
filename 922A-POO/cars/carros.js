function criarCarro(cor, modelo, velocidadeAtual, velocidadeMaxima) {
    return {
        carro: {
            cor: cor,
            modelo: modelo,
            velocidadeAtual: velocidadeAtual,
            velocidadeMaxima: velocidadeMaxima,
            motor: {
                potencia: undefined,
                tipo: undefined
            },
            liga: function() {
                if (this.motor.tipo && this.motor.tipo.toLowerCase() === "elétrico"
                ){
                    return "Carro ligado, mas sem nenhum barulho"
                }
                return "Carro ligado"
            },
            acelera: function(qtd) {
            if (this.velocidadeAtual + qtd > velocidadeMaxima) {
                    return `Limite de velocidade atingido. Este carro só suporta ${this.velocidadeMaxima} km/h`
                }
             this.velocidadeAtual += qtd
             return this.velocidadeAtual + " km/h"
            },
            informaMarcha: function() {
                if (this.velocidadeAtual < 0) {
                    return "Marcha ré"
                }
                if (this.velocidadeAtual >= 0 && this.velocidadeAtual <= 39) {
                    return "1ª Marcha"
                }
                if (this.velocidadeAtual >= 40 && this.velocidadeAtual <= 79) {
                    return "2ª Marcha"
                }
                if(this.velocidadeAtual >= 80) {
                    return "3ª Marcha"
                }
            }
        }
    }
}

let carro = criarCarro("Verde", "Fusca", 0, 80).carro

let motor = carro.motor
motor.potencia = 150
motor.tipo = "Gasolina"

console.log(carro.liga())
console.log(carro.acelera(79))
console.log(carro.acelera(1))
console.log(carro.acelera(1))
console.log(carro.informaMarcha())

let carroEletrico = criarCarro("Prata", "Tesla Model S", 0, 220).carro

let motorE = carroEletrico.motor
motorE.potencia = 250
motorE.tipo = "Elétrico"

console.log(carroEletrico.liga())
console.log(carroEletrico.informaMarcha())
console.log(carroEletrico.acelera(30))
console.log(carroEletrico.acelera(60))
console.log(carroEletrico.informaMarcha())
console.log(carroEletrico.acelera(50))
console.log(carroEletrico.informaMarcha())
console.log(carroEletrico.acelera(80))
console.log(carroEletrico.acelera(80))