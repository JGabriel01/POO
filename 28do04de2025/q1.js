/*
Separe o nome: O primeiro passo é pegar o nome completo e dividi-lo em palavras individuais. Pense em qual método de string em JavaScript pode te ajudar a fazer isso, usando o espaço como separador.

Pegue as iniciais: Depois de ter as palavras separadas, você precisa extrair a primeira letra de cada palavra. Lembre-se de converter essas letras para minúsculo para seguir o padrão.

Forme a sigla: Junte todas as iniciais que você extraiu para formar a sigla do username.

Controle de siglas repetidas:

Você vai precisar de alguma forma de "lembrar" quais siglas já foram geradas. Um objeto JavaScript pode ser útil aqui, onde a sigla seria a chave.
Ao gerar uma nova sigla, verifique se ela já existe nesse "lembrete".
Se a sigla já existir, você precisará contar quantas vezes ela apareceu e adicionar esse número ao final da sigla atual.
Não se esqueça de atualizar a contagem da sigla no seu "lembrete".
Se a sigla for nova, adicione-a ao seu "lembrete" com uma contagem inicial de 1.
Monte o e-mail: Finalmente, pegue a sigla (com a contagem, se necessário) e concatene com a parte fixa do e-mail: @aluno.ifal.edu.br */

function gerarIniciais(str) {
    let separadas = str.split(' ')
    let iniciais = separadas.map(palavras => palavras.charAt(0).toLowerCase())
    return iniciais.join("")
}
console.log(gerarIniciais("José Gabriel Cavalcante de Almeida"))

function gerarEmail(str1,str2,str3) {
       let sigla1 = gerarIniciais(str1)
       let sigla2 = gerarIniciais(str2)
       let sigla3 = gerarIniciais(str3)
       let contador = 0
       if (sigla1 === sigla2 && sigla1 === sigla3) {
        contador++
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + contador + "@aluno.ifal.edu.br", sigla3 + (contador+1) + "@aluno.ifal.edu.br"] 
       } else if (sigla2 === sigla3 && sigla2 === sigla1) {
        contador++
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + "@aluno.ifal.edu.br", sigla3 + contador + "@aluno.ifal.edu.br"]
       } else if (sigla1 !== sigla2 && sigla1 === sigla3) {
        contador++
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + "@aluno.ifal.edu.br", sigla3 + contador + "@aluno.ifal.edu.br"]
       } else if (sigla2 !== sigla1 && sigla2 === sigla3) {
        contador++
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + "@aluno.ifal.edu.br", sigla3 + contador + "@aluno.ifal.edu.br"]
       } else if (sigla1 === sigla2 && sigla1 !== sigla3) {
        contador++
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + contador + "@aluno.ifal.edu.br", sigla3 + "@aluno.ifal.edu.br"]
       } else {
        return [sigla1 + "@aluno.ifal.edu.br", sigla2 + "@aluno.ifal.edu.br", sigla3 + "@aluno.ifal.edu.br"] 
       }
}
console.log(gerarEmail("José Gabriel Cavalcante de Almeida","João Gabriel Cavalcante de Almeida", "José Reinaldo Cavalcante de Almeida"))