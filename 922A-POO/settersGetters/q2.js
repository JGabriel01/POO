class aluno {
    #nome
    #matricula
    #nota1
    #nota2
    constructor(nome, matricula) {
        this.#nome = nome
        this.#matricula = matricula
        this.#nota1 = 0
        this.#nota2 = 0
    }

    getNome() {
        return this.#nome
    }

    getMatricula() {
        return this.#matricula
    }

    getMedia() {
        let n1 = this.#nota1
        let n2 = this.#nota2

        let media = (n1 + n2)/2

        return console.log(media)
    }

    setNota1(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#nota1 = nota
        } else {
            return console.log(`Nota Invalida`) 
        }
    }

    setNota2(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#nota2 = nota
        } else {
            return console.log(`Nota Invalida`) 
        }
    }
}

let al1 = new aluno("José", 1981108201)
al1.setNota1(15)
al1.setNota2(10)
al1.getMedia()