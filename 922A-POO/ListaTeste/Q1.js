let dog = {
  nome: "Rex",
  especie: "Cachorro",
  raca: "Labrador",
  idade: 5,
  vacinado: true,
  servicos: ["banho", "consulta"]
}

function exibirFicha(ob) {
  let msg = ""
  if (ob.vacinado === true) {
    msg = `${ob.nome} é um ${ob.especie} da raça ${ob.raca}, de ${ob.idade} anos. Vacinado: sim`
  } else {
    msg = `${ob.nome} é um ${ob.especie} da raça ${ob.raca}, de ${ob.idade} anos. Vacinado: não`
  }
  return msg
}

console.log(exibirFicha(dog))