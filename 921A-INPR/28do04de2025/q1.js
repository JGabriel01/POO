/*Usar a política de nomeclatura de emails dos alunos do ifal.  
Os username dos e-mails dos alunos é uma sigla formada pelas iniciais de cada palavra do nome completo. 
E no caso de repetição de sigla contar as siglas iguais e acrescentar o número de contagem: */

function gerarIniciais(str) {
    let separadas = str.split(' ')
    let iniciais = separadas.map(palavras => palavras.charAt(0).toLowerCase())
    return iniciais.join("")
}

let listaDeSiglas = []
function armazenarIniciais(str1,lista) {
    let ini = gerarIniciais(str1)
    lista.push(ini)
    return lista
}

function gerarEmails(str2) {
     let cont = 0
     let a = armazenarIniciais(str2,listaDeSiglas)
     let b = gerarIniciais(str2)
     for (let i in listaDeSiglas) {
        if (listaDeSiglas[i] === b) {
            ++cont
        } 
     }
     return b + cont + "@aluno.ifal.edu.br"
}
console.log(gerarEmails("JOÃO DUATE ALMEIDA"))
console.log(gerarEmails("JESSICA DIAS ANDRADE"))
console.log(gerarEmails("JOSÉ DE ALCANTARA"))