let perfil = {
  nome: "Ana",
  email: "ana@email.com",
  endereço: {
    rua: "Fulano",
    cidade: "Maceió"
  }
}
console.log(`Endereço antigo: ${perfil.endereço.rua} - ${perfil.endereço.cidade}`)
let rua = perfil.endereço.rua = "A" 
perfil = perfil.endereço.cidade = "Boca da Mata"
console.log(`Endereço novo: ${rua} - ${perfil}`)