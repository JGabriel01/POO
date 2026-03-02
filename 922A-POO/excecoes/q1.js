const prompt = require("prompt-sync")()

function validandoEntradas() { 
    try {
    let pedir = prompt("Digite um número menor que 0: ")

    if (pedir < 0){
 throw "Número Invalido! Digite um número maior que 0!"
    }

    console.log(`O número ${pedir} é valido e maior que 0!`)

    }
    catch (erro) {

        console.log("Erro: " + erro)
           
    }
    finally {

        console.log("Verificação de Número Concluída!")

    }
}

validandoEntradas()