/* Executando o módulo criado no arquivo mensagens */
const msg = require("./mensagens") /** Temos que informar o local exato do arquivo em que está o module.exports, é bem parecido quando usamos o cmd */
console.log(msg.saudacao("José"))
console.log(msg.despedida("Pedro"))
console.log(msg.gerarIdAleatorio("José"))