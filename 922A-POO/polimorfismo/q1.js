class animal {
    emitirSom() {
        console.log("Som indefinido")
    }
}

class cachorro extends animal {
    constructor() {
        super()
    }
    emitirSom() {
        console.log("Au au!")
    }
}

class gato extends animal {
    constructor() {
        super()
    }
    emitirSom(){
        console.log("Miau!")
    }
}

class passarinho extends animal {
    constructor(){
        super()
    }
    emitirSom(){
        console.log("Piu piu!")
    }
}

let Cachorro = new cachorro()
let Gato = new gato()
let Passarinho = new passarinho()
let lista = [Cachorro, Gato, Passarinho]

lista.forEach((e) => e.emitirSom())