function dividirDoisNum(num1, num2) {
    try {
    let divisao = num1 / num2

    if ((num1 === 0 || num2 === 0) || (isNaN(num1) || isNaN(num2))) {
        throw "Divisão com algum dos números sendo 0 é inválido "
    }

    console.log(`O resultado da divisão é: ${divisao}`) 
    } catch (erro) {
        console.log("Erro: " + erro)
    } finally {
        console.log("Operação Concluída!")
    }   
}

dividirDoisNum(10, 2
)