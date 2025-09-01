let heroiFav = {
    nomeReal: "Tony Stark",
    codinome: "Homem de ferro",
    poderes: ["Armadura tecnológica", "Inteligência Genial", "Voo"],
    afiliacao: "Vingadores"
}

function possuirPoder(ob, poder) {
    poder = poder.toLowerCase()
    let poderesReais = [] 
    for (let i in ob.poderes) {
        poderesReais.push(ob.poderes[i].toLowerCase())
    }
    return poderesReais.includes(poder)
}

console.log(possuirPoder(heroiFav, "voar"))