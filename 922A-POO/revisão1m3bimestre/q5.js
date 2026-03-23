function inserirNum() {
    let prompt = require('prompt-sync')()
    try {
        let n = prompt("Insira um número maior e diferente de 0: ")

        if (n <= 0 || isNaN(n)) {
            throw new Error("Erro: Número inválido")
        }
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("Função finalizada!")
    }
}

function divisao(n1,n2) {
    try {
        let div = n1/n2
        
        if (n1 === 0 || n2 === 0 || isNaN(n1) || isNaN(n2)) {
            throw new Error("Erro: Número Invalido!")
        }
        
        console.log(`Resultado da divisão: ${div}`)
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("Função Finalizada")
    }
}

class estudante {
    constructor(idade, nome) {
        this.idade = idade
        this.nome = nome 
    }
}

function acesso(est) {
    try {
        if(est === null) {
            throw new Error("Erro: Coloque um objeto válido!")
        }

        if (est.idade === null || est.nome === null) {
            throw new Error("Erro: Nome ou idade inválidos!")
        }
        
        console.log(`Nome: ${est.nome}, idade: ${est.idade} anos.`)

    } catch (e) {
        console.log(e.message)
    } finally {
        console.log("Função finalizada!")
    }
}

let E1 = new estudante(null, "José")

acesso(null)