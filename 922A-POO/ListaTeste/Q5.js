let time = {
    nomeTime: "Os Invencíveis",
    treinador: "José Roberto",
    jogadores: ["Cleiton", "Juscelino", "Pedro", "Fábio", "Sérgio"],
    vitorias: 0,
    derrotas: 0,

    registrarPartida: (vitoria, derrota) => {
        time.vitorias = Number(vitoria)
        time.derrotas = Number(derrota)

        return `O time: ${time.nomeTime} teve ${time.vitorias} vitória(s) e ${time.derrotas} derrota(s).`
    }
}

console.log(time.registrarPartida("2", "1"))