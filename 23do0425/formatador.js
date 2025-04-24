function formatarNomes(nome) {
  return nome.toLowerCase().split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ")
}

function formatarCpf(cpf) {
     if (cpf.length > 11) {
        console.log("Cpf invalido!")
     } else {
        return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11)
     }
}
//Obs: ambos estão errados, pois ele quer formatar e não censurar no cpf
module.exports = {formatarCpf, formatarNomes}