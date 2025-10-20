function criar_Pessoa() {
    return {
        nome: "",
        idade: 0,
        fazAniversario: function() {
            return this.idade += 1
        },
        exibirDetalhes: function() {
            return `Nome: ${this.nome} e Idade: ${this.idade}`
        }
    }
}

let pessoa = criar_Pessoa()

pessoa.nome = "José"
pessoa.idade = 16
pessoa.fazAniversario()
console.log(pessoa.exibirDetalhes())

function criaPlaylist() {
    return {
        nome: "",
        autor: "",
        musicas: [],
        adicionarMusica: function(msc) {
            this.musicas.push(msc.toLowerCase())
        },
        removerMusica: function(msc) {
            let indice = this.musicas.findIndex(M => M === msc.toLowerCase())

            if (indice === -1) {
                return false
            }

            this.musicas.splice(indice, 1)
        },
        listarMusicas: function() {
            let arr = []
            let c = 0 
            for (let e of this.musicas) {
                c += 1
                let elemento = ` ${c}- ${e}`
                arr.push(elemento)
            }
            return arr.join(",")
        },
        quantidadeDeMusicas: function() {
            return this.musicas.length
        }
    }
}

let playlist = criaPlaylist()

playlist.musicas = ["msc1", "msc2", "msc3"]
playlist.adicionarMusica("msc4") 
console.log(playlist.listarMusicas())
playlist.removerMusica("msc4")
console.log(playlist.quantidadeDeMusicas())