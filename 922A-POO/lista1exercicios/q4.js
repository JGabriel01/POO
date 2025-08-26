let heroiFavorito = {
    nomeReal: "Bruce Wayne",
    codinome: "Batman",
    poderes: ["riqueza", "artes marciais"],
    afiliacao: "Liga da Justiça",
}

function possuirPoder(heroiFavorito, poderAleatorio) {
    poderAleatorio = poderAleatorio.toLowerCase()
    return heroiFavorito.poderes.includes(poderAleatorio)
}

console.log(possuirPoder(heroiFavorito, "riqueza")) // true
console.log(possuirPoder(heroiFavorito, "ARTES MARCIAIS")) // true
console.log(possuirPoder(heroiFavorito, "super força")) // false
