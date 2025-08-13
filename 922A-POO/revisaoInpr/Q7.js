function somarValoresPositivos (valores) {
  let valoresPositivos = []
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] >= 1) {
    valoresPositivos.push(valores[i]);
    }
  }
  let somaPositivos = 0 
  for (let i = 0; i < valoresPositivos.length; i++) {
    somaPositivos += valoresPositivos[i];
  }
  return somaPositivos
}
console.log(somarValoresPositivos([10,-2,-70, 13, 1, 0]))