let heroiFavorito = {
    nomeReal: "Bruce Wayne",
    codinome: "Batman",
    poderes: ["riqueza", "artes marciais"],
    afiliacao: "Liga da Justiça",
}

let poderAleatorio = "ARTES MARCIAIS"
function possuirPoder(heroiFavorito, poderAleatorio) {
    for(let e of heroiFavorito.poderes) {
        poderAleatorio = poderAleatorio.toLowerCase()
        if(e === poderAleatorio) {
            return true
        } else {
            return false
        }
    }
}

console.log(possuirPoder(heroiFavorito, poderAleatorio))