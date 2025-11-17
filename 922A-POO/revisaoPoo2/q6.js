class personagem {
    constructor (nome, vida, forca) {
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    atacar(outroPersonagem) {
        if (this.vida <= 0 || outroPersonagem.vida <=0) {
            return console.log(`Vida esgotada, portanto não pode atacar`)
        }
            const dano = this.forca

            console.log(`${this.nome} ataca ${outroPersonagem.nome}!`)

            outroPersonagem.receberDano(dano)
        
    }

    receberDano(dmg){
        this.vida -= dmg
        if (this.vida <= 0) {
            console.log(`O personagem ${this.nome} lutou bravamente, mas morreu.`)
            this.vida = 0
        } else {
            console.log(`O personagem ${this.nome} sofreu dano. Vida restante: ${this.vida}`)
        }
    }

    exibirStatus() {
        console.log(`---Personagem: ${this.nome}---`)
        console.log(`Vida: ${this.vida}`)
        console.log(`Força: ${this.forca}`)
    }
}

let sith = new personagem("Darth Vader", 2000, 300)
let jedi = new personagem("Luke Skywalker", 1500, 500)

jedi.atacar(sith)
sith.atacar(jedi)

jedi.atacar(sith)
sith.atacar(jedi)

jedi.atacar(sith)
sith.atacar(jedi)

jedi.atacar(sith)
sith.atacar(jedi)
jedi.atacar(sith)

jedi.exibirStatus()
sith.exibirStatus()