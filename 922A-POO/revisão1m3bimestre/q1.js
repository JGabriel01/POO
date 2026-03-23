class animal {
    emitirSom() {
        console.log("O animal emite um som");
    }
}

class cachorro extends animal {
    constructor(){
        super()
    }

    emitirSom() {
        console.log("O cachorro late");
    }
}

class gato extends animal {
    constructor(){
        super()
    }

    emitirSom() {
        console.log("O gato mia");
    }
}

class passarinho extends animal {
    constructor(){
        super()
    }

    emitirSom() {
        console.log("O passarinho canta");
    }
}

let lista = [new cachorro(), new gato(), new passarinho()]
lista.forEach(animal => animal.emitirSom())