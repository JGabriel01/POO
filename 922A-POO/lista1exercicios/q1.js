let dog = {
    nome: "Rex",
    especie: "cachorro",
    raca: "Labrador",
    idade: 5,
    vacinado: true,
    servicos: ["Banho", "consulta"]
}
function exibirFicha(dog) {
    if (dog.vacinado === true) {
        return `${dog.nome} é um ${dog.especie} da raça ${dog.raca} de ${dog.idade} anos. Vacinado: sim`
    } else {
        return `${dog.nome} é um ${dog.especie} da raça ${dog.raca} de ${dog.idade} anos. Vacinado: não`
    }
}

console.log(exibirFicha(dog)) 
