function filtrarCodigosPares(num) {
  let pares = []
  for (let i = 0; i < num.length; i++){
    if (num[i] % 2 === 0) {
      pares.push(num[i])
    }
  }
  return pares
}

console.log(filtrarCodigosPares([101, 202, 303, 404, 505, 606]))