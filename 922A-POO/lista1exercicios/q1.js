let dog = {
    nome: "Rex",
    especie: "cachorro",
    raca: "Labrador",
    idade: 5,
    vacinado: true,
    servicos: ["Banho", "consulta"]
}
function exibirFicha(dog) {
  let msg = "";
    if (dog.vacinado === true) {
        msg = `${dog.nome} é um ${dog.especie} da raça ${dog.raca} de ${dog.idade} anos. Vacinado: sim`
    } else {
        msg = `${dog.nome} é um ${dog.especie} da raça ${dog.raca} de ${dog.idade} anos. Vacinado: não`
    }
    return msg
}

console.log(exibirFicha(dog)) 
