// Funções recursivas são como estruturas de repetições 
function somaPontosAte(n) {
  if (n==0) return 0;
  return n + somaPontosAte(n - 1)
}
// função recursiva para somar todos os pontos 
console.log("Somando pontos até n:5")
console.log(somaPontosAte(5))

function inverter(str) {
    if (str.length < 1) return "";
    return inverter(str.slice(1)) + str[0];
}
console.log(inverter("IFAL"))

function moveDisco(torre1,torre3) {
    return console.log(`Movimento: ${torre1} => ${torre3}`)
}

function moveTorre(n, origem, destino, aux) {
    if (n == 1) {
        moveDisco(origem, destino)
    } else {
        moveTorre(n - 1, origem, aux, destino)
        moveDisco(origem, destino) 
        moveTorre(n-1, aux, destino, origem)
    }
}

console.log(moveTorre(3, "torre 1", "torre 3", "torre 2"))