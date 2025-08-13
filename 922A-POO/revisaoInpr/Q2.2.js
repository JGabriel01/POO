let n = 22;

// Imprime o valor inicial
console.log(n);

// O loop continua enquanto n for maior que 1
while (n > 1) {
  if (n % 2 == 0) {
    // n é par, divide por 2
    n = n / 2;
  } else {
    // n é ímpar, multiplica por 3 e soma 1
    n = n * 3 + 1;
  }
  // Imprime o novo valor de n a cada passo
  console.log(n);
}
