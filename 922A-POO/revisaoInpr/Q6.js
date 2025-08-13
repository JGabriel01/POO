function encontrarPalindromos(palavras) {
  let palindromos = []
  for (let i in palavras) {
    const palavraOriginal = palavras[i]
    const palavraInvertida = palavraOriginal.split("").reverse().join("")
    if (palavraOriginal === palavraInvertida){
      palindromos.push(palavraOriginal)
    }
  }
  return palindromos
}
console.log(encontrarPalindromos(['arara', 'olá', 'osso', 'banana']))