/*rie um programa que declare o preço original de um produto (ex: 250.00) e a porcentagem de desconto (ex: 15). Calcule o valor do desconto em reais e o preço final do produto. */

/*let preco = 250.00
let porcentagem = 0.15

let desconto = preco*porcentagem
let preco_Final = preco - desconto
console.log(preco_Final)**/

/** Crie uma função chamada calcularIMC(peso, altura). Ela deve calcular o IMC ($\text{peso} / \text{altura}^2$) e retornar uma string com a situação da pessoa conforme as regras abaixo:IMC $< 18.5$: "Abaixo do peso"Entre $18.5$ e $24.9$: "Peso normal"Entre $25.0$ e $29.9$: "Sobrepeso"$\ge 30.0$: "Obesidade" */

function calcularImc(peso, altura) {
    let imc = peso/altura**2

    if(imc < 18.5) {
        return "Abaixo do Peso"
    } else if (imc >= 18.5 && imc <= 24.9){
        return "Peso Normal"
    } else if (imc >= 25.0 && imc <= 29.9){
        return "Sobrepeso"
    } else if (imc >= 30.0) {
        return "Obesidade"
    }
}
/**console.log(calcularImc(87, 1.86))*/

/** Escreva uma função verificarTipoDia(diaNumero) que receba um número de $1$ a $7$ ($1 = \text{Domingo}$, $2 = \text{Segunda}$, ..., $7 = \text{Sábado}$). */
/**function verificarTipoDia(num) {
    if (num === 1) {
        return "Domingo"
    } else if (num === 2) {
        return "Segunda"
    } else if (num === 3) {
        return "Terça"
    } else if (num === 4) {
        return "Quarta"
    } else if (num === 5) {
        return "Quinta"
    } else if (num === 6) {
        return "Sexta"
    } else if (num === 7) {
        return "Sábado"
    } else {
        return "Número Invalido: Digite um número correspondente aos dias da semana, de 1 a 7."
    }
}*/

/**console.log(verificarTipoDia(0))*/

/** Crie uma função somarPares(limite) que receba um número inteiro positivo. Utilize um laço de repetição para somar apenas os números pares no intervalo de $1$ até esse limite (inclusive). */

function somarPares(limite) {
    let contador = 1
    let soma = 0
    while (contador <= limite) {
        let calc = contador%2
        calc === 0? soma += contador : soma += 0
        ++contador
    }
    return soma
}

//console.log(somarPares(10))