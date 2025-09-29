let obj = {
  nome: "Maria"
}
let a = obj
  console.log(`-- Antes da Modificação --`)
  console.log(`Nome do usuário original: ${obj.nome}`)
  console.log(`Nome de usuário admin: ${a.nome}`)
  obj = obj.nome = "Maria Souza"
  console.log(`-- Depois da Modificação --`)
  console.log(`Nome do usuário original: ${obj}`)
  console.log(`Nome do usuário Admin: ${a.nome}`)