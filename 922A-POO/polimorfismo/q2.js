class personagem {
    atacar(){
    }
}

class guerreiro extends personagem {
    constructor() {
        super()
    }
    atacar(){
        console.log("Guerreiro ataca com sua espada!")
    }    
}

class arqueiro extends personagem {
    constructor() {
        super()
    }
    atacar(){
        console.log("Arqueiro ataca com flecha!")
    }
}

class mago extends personagem {
    constructor() {
        super()
    }
    atacar(){
        console.log("Mago lança uma bola de fogo!")
    }
}

function iniciarBatalha(personagem) {
    return personagem.atacar()
}

let Arqueiro = new arqueiro()
let Guerreiro = new guerreiro()
let Mago = new mago()

iniciarBatalha(Arqueiro)
iniciarBatalha(Guerreiro)
iniciarBatalha(Mago)