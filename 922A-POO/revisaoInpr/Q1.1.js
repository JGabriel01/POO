let a = -6;
let b = -11;

// Garante que o loop sempre vá do menor para o maior valor
let numInicial = Math.min(a, b);
let numFinal = Math.max(a, b);

// Loop pelos números inteiros no intervalo fechado [numInicial, numFinal]
for (let x = numInicial; x <= numFinal; x++) {
  let resultado = x * x - 4 * x + 5;
  console.log(resultado);
}
