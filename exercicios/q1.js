const prompt = require('prompt-sync')()

function calcularIdade(idade) {
    if (idade > 0 && idade <=12) {
        return "Criança"
    } else if (idade >= 13 && idade <= 17)  {
        return "Adolescente"
    } else if (idade >= 18 && idade <= 59) {
        return "Adulto"
    } else if (idade >= 60){
        return "Idoso"
    } else {
        return "Idade Inválida"
    }
}

let num = prompt("Digite um Número para calcular sua tabuada do 1 ao 10:")
for (let i = 1; i <= 10; i++) {
    console.log(`${num} . ${i} = ${num * i}`)
}

let notas = [8, 9, 10, 6]
let total = 0
notas.forEach((e) => console.log(total += e))
let media = total/notas.length
console.log(media)