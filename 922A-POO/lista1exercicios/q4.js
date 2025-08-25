let heroiFavorito = {
    nomeReal: "Bruce Wayne",
    codinome: "Batman",
    poderes: ["riqueza", "artes marciais"],
    afiliacao: "Liga da Justiça",
}

function possuirPoder(heroiFavorito, poderAleatorio) {
    for(let i=0; i<heroiFavorito.poderes.length; i++) {
        let poder = heroiFavorito.poderes[i]
        return poder==poderAleatorio
    }
}

console.log(possuirPoder(heroiFavorito, "ARTES MARCIAIS"))
