class personagem {
    atacar() {
        console.log("atacando");
    }
}

class guerreiro extends personagem {
    constructor() {
        super()
    }

    atacar() {
        console.log("Guerreiro ataca com sua espada!")
    }
}

class arqueiro extends personagem {
    constructor () {
        super()
    }

    atacar() {
        console.log("Arqueiro atira sua flecha!")
    }
}

class mago extends personagem {
    constructor() {
        super()
    }

    atacar() {
        console.log("Mago lança bola de fogo!")
    }
}

function iniciarBatalha(p) {
    return p.atacar()
}

iniciarBatalha(new guerreiro())
iniciarBatalha(new arqueiro())
iniciarBatalha(new mago())