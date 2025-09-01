let receita = {
  nomeReceita: "panqueca americana",
  tempoPreparo: "45 minutos",
  ingredientes: ["ovo", "manteiga", "leite", "xarope"],
  instrucoes: ["pegue isso", "misture", "coloque no forno"]
}

function imprimirReceita(ob) {
  console.log(`${ob.nomeReceita}`)
  console.log(`O tempo de preparo dessa receita é de ${ob.tempoPreparo}`)
  
  console.log(`Ingredientes necessários:`)
  let c1 = 0
  let ingredientes = ob.ingredientes
  for (let i in ingredientes) {
    c1 += 1 
    console.log(`${c1} - ${ingredientes[i]}`)
  }
  
  console.log(`Métodos de preparo:`)
  let c2 = 0
  let instrucoes = ob.instrucoes
  for (let i in instrucoes) {
    c2 += 1 
    console.log(`${c2} - ${instrucoes[i]}`)
  }
}

imprimirReceita(receita)