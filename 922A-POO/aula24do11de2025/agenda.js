const dateNames = require('date-names');

/**
 * Retorna o nome do dia da semana em inglês,
 * dado o seu índice (0 para Domingo, 6 para Sábado),
 * utilizando o array 'days' da biblioteca date-names.
 *
 * O array days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 *
 * @param {number} dayNumber O índice do dia da semana (0-6).
 * @returns {string} O nome do dia em inglês ou uma mensagem de erro.
 */
function getDayName(dayNumber) {
  // Extrai o array de dias completos da biblioteca.
  const days = dateNames.days;

  // Verifica se o número está dentro do intervalo válido (0 a 6).
  if (dayNumber >= 0 && dayNumber <= 6) {
    // Retorna o nome do dia usando o número como índice.
    return days[dayNumber];
  } else {
    return "Número inválido. O dia da semana deve ser um índice entre 0 (Domingo) e 6 (Sábado).";
  }
}

// --- Exemplos de Uso ---
console.log("--- Teste da Função getDayName ---");
console.log(`Dia 0 (Domingo): ${getDayName(0)}`);
console.log(`Dia 1 (Segunda): ${getDayName(1)}`);
console.log(`Dia 4 (Quinta): ${getDayName(4)}`);
console.log(`Dia 6 (Sábado): ${getDayName(6)}`);
console.log(`Dia 7 (Inválido): ${getDayName(7)}`);

// Exporta a função para uso em outros módulos (opcional, mas boa prática)
module.exports = {
    getDayName
};