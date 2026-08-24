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
//console.log(media)

/* Escreva uma função contarVogais(texto) que receba uma string qualquer e retorne a quantidade de vogais ($a, e, i, o, u$ — desconsidere maiúsculas/minúsculas) contidas na palavra ou frase. */

function contarVogais (texto) {
    texto = texto.toLowerCase()
    let vogais = "aeiouáéíóú"
    let contador = 0
    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++
        }
    }

    return contador
}

//console.log(contarVogais("José"))

/* Crie duas funções:calcularMedia(notas): recebe um array com $3$ notas de um aluno e retorna a média aritmética simples.gerarRelatorio(turma): recebe um array de objetos representando a turma. Cada objeto possui as propriedades nome e notas.A função gerarRelatorio deve percorrer todos os alunos, calcular a média de cada um (usando a função calcularMedia) e retornar um novo vetor de objetos com o seguinte formato:{ nome: "Nome", media: 7.5, status: "Aprovado" } (Considerar Aprovado se media >= 7.0, caso contrário "Reprovado"). */

function calcularMedia(notas) {
    let somaNotas = 0

    for (let e of notas) {
        somaNotas += Number(e)
    }

    let media = somaNotas/notas.length
    return media
}

function gerarRelatorio(turma) {
    let relatorioFinal = []
    for (let aluno of turma) {
        let notas = aluno.notas
        let nome = aluno.nome

        let valorMedia = calcularMedia(notas)
        let media
        if (valorMedia >= 7) {
            media = "Aprovado"
        } else {
            media = "Reprovado"
        }
        relatorioFinal.push({
            nome: nome,
            media: valorMedia,
            status: media
        })
    }

    return relatorioFinal
}

/*console.log(gerarRelatorio([
    {
        nome: "José Gabriel",
        notas: [10, 9, 8, 7]
    },
    {
        nome: "Ana",
        notas: [9, 8, 8, 6]
    },
    {
        nome: "Bob",
        notas: [7, 6, 6, 5]
    }
]))*/