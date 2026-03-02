class Estudante {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

let E1 = new Estudante(null, 18)

function imprimirEstudante(est) {
    try {
        let nome = est.nome
        let idade = est.idade

        if (nome === null || idade === null) {
            let E = new Error("Alguma propriedade está nula!")
            throw E
        }

        console.log(`Nome: ${nome}, idade: ${idade}`)
    } catch (error) {
        console.log(`${error}`)
    } finally {
        console.log("Função Terminou a execução")
    }
} 


imprimirEstudante(E1)