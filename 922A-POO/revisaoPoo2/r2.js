class aluno {
    #nome
    #matricula
    #nota1
    #nota2
    constructor (nome, matricula) {
        this.#nome = nome
        this.#matricula = matricula
        this.#nota1 = 0
        this.#nota2 = 0
    }
    get Nome(){
        return this.#nome
    }
    get Matricula(){
        return this.#matricula
    }
    get Media() {
        let media = (this.#nota1 + this.#nota2)/2
        return media 
    }
    set Nota1(nota) {
        if (nota >= 0 && nota <=10) {
            this.#nota1 = nota
        } else {
            return console.log(`Nota Invalida`)
        }
    }
    set Nota2(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#nota2 = nota
        } else {
            return console.log(`Nota Invalida`)
        }
    }
}

let al1 = new aluno("José", 1212121212)
al1.Nota1 = 7
al1.Nota2 = 8

console.log(al1.Media)