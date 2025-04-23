/* Módulo de mensagens */
/* Retorna uma mensagem de saudação para o nome informado */
function saudacao(nome) {
    return `Olá ${nome}!`
}
/* Retorna uma mensagem de despedida para o nome informado */
function despedida(nome) {
    return `Até mais ${nome}!`
}

/* para exportar usamos "Module.exports", com o objetivo de que outro javascript possa usar as funções criadas nesse arquivo */
module.exports = {saudacao, despedida}