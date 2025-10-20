function criarCarro() {
    return {
        cor: "",
        modelo: "",
        velocidadeAtual: 0,
        velocidadeMaxima: 0,
        motor: {
            potencia: 0,
            tipo: ""
        },
        liga: function() {
            if (this.motor.tipo.toLowerCase() === "elétrico") {
                return `O carro está ligado, mas sem nenhum barulho`
            } else {             
                return `O carro está ligado`
            }
        },
        acelera: function(qtd) {
            if (this.velocidadeAtual + qtd > this.velocidadeMaxima) {
                return console.log(`Não pode-se acelerar mais, pois ultrapassa a velocidade máxima do carro`)
            } else {
              this.velocidadeAtual += qtd
            }
        },
        informaMarcha: function() {
            if (this.velocidadeAtual < 0) {
                return `Marcha Ré`
            } 
            if (this.velocidadeAtual >= 0 && this.velocidadeAtual <= 39) {
                return `1ª Marcha`
            }
            if (this.velocidadeAtual >= 40 && this.velocidade <= 79) {
                return `2ª Marcha`
            }
            if (this.velocidadeAtual >= 80) {
                return `3ª Marcha`
            }
        }
    }
}

let carro = criarCarro()

carro.cor = "Verde"
carro.modelo = "Fusca"
carro.velocidadeMaxima = 80

let motor = carro.motor

motor.potencia = 150
motor.tipo = "Gasolina"

console.log(carro.liga())
carro.acelera(80)
console.log(carro.informaMarcha())
carro.acelera(1)
console.log(carro.informaMarcha())

let carroE = criarCarro()

carroE.cor = "Prata"
carroE.modelo = "Tesla Model S"
carroE.velocidadeAtual = 50
carroE.velocidadeMaxima = 300

let motorE = carroE.motor

motorE.potencia = 500
motorE.tipo = "elétrico"

console.log(carroE.liga())
carroE.acelera(80)
console.log(carroE.informaMarcha())
carroE.acelera(1)
console.log(carroE.informaMarcha())