function formatarNomes(nome) {
    let i = nome.charAt(0).toUpperCase() /* Primeiro usamos o charAt para retirar a letra no índice 0, e em seguida a transformamos em maiscula com o toUpperCase */
    let e = nome.slice(1) //Aqui nós separamos a string conservando o elemento no índice 1 e retiramos todos os outros anteriores a ele com o slice, pois ele conserva o primeiro elemento a ser cortado e elimina os outros anteriores a ele.
    return i + e //por fim concatenamos para formar a string com inicial maiscula
}

function formatarCpf(CPF) {
    let newCpf = ""
    for (let i in CPF) {
        if(CPF[i] !== "." && CPF[i] !== "-") {
            newCpf += "#"
        } else {
            newCpf += CPF[i]
        }
    }
    return newCpf
}

module.exports = {formatarCpf, formatarNomes}