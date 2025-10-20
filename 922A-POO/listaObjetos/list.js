function criarPessoa() {
    return {
            nome: "",
            idade: 0,
            fazAniversario: function () {
                if (this.idade) {
                    return this.idade += 1
                }
            },
            exibirDetalhes: function() {
                    return `Nome: ${this.nome} e idade: ${this.idade}`
            }
        }
        
    }


let pessoa1 = criarPessoa()

pessoa1.nome = "José Gabriel"
pessoa1.idade = 16

console.log(pessoa1.exibirDetalhes())
console.log(pessoa1.fazAniversario())
console.log(pessoa1.exibirDetalhes())

//problema 2

function criarPorta() {
    return {
        aberta: false,
        cor: "",
        dimensaoX: 0,
        dimensaoY: 0,
        dimensaoZ: 0,
        abre: function() {
               this.aberta = true
        },
        fecha: function() {
                this.aberta = false
            
        },
        pinta: function(str) {
             this.cor = str
             return this.cor
        },
        estaAberta: function() {
             return this.aberta
        },
        exibirDetalhes: function() {
            let aberta = this.estaAberta()
            let cor = this.cor
            let dx = this.dimensaoX
            let dy = this.dimensaoY
            let dz = this.dimensaoZ
            
            if (aberta === true) {
            return `Cor da porta: ${cor}; A porta está aberta; Esta porta tem essas dimensões: x: ${dx}, y: ${dy} e z: ${dz}`
        }    
            return `Cor da porta: ${cor}; A porta está fechada; Esta porta tem essas dimensões: x: ${dx}, y: ${dy} e z: ${dz}`
        }
    }

}

let porta = criarPorta()

porta.dimensaoX = 45
porta.dimensaoY = 50
porta.dimensaoZ = 100

porta.abre()
porta.pinta("Marrom")
console.log(porta.exibirDetalhes())

//problema 3

function criarLivro() {
    return {
        titulo: "",
        autor: "",
        anoPublicacao: 0,
        genero: "",
        paginaAtual: 0,
        avancarPagina: function(){
            this.paginaAtual += 1
        },
        voltarPagina: function() {
            this.paginaAtual += -1
        },
        exibirDetalhe: function() {
            if ((this.titulo === "") || (this.autor === "") || (this.anoPublicacao === 0) || (this.genero === "")){
                return "Informações sobre o livro faltando"
            }
            return `Título: ${this.titulo}, Autor: ${this.autor}, ano de publicação ${this.anoPublicacao}, gênero: ${this.genero} e página atual: página ${this.paginaAtual}`
        }
    }
}

let livro = criarLivro()
console.log(livro.exibirDetalhe())
livro.titulo = "livro aleatorio"
livro.autor = "autor qualquer"
livro.anoPublicacao = 2015
livro.genero = "Ficção cientifica"
console.log(livro.exibirDetalhe())
livro.avancarPagina()
livro.avancarPagina()
livro.voltarPagina()
console.log(livro.exibirDetalhe())

//Problema 4

function criarAnimal() {
    return {
        nome: "",
        especie: "",
        idade: 0,
        emitirSom: function(som) {
            return `${som}`
        },
        envelhecer: function() {
            ++this.idade
        },
        exibirDetalhes: function() {
            if ((this.nome === "") || (this.especie === "")) {
                return `Coloque o nome e a espécie do animal.`
            }
            return `Nome: ${this.nome}; Espécie: ${this.especie} e idade: ${this.idade} anos.`
        }
    }
}

let animal1 = criarAnimal()
console.log(animal1.exibirDetalhes())
animal1.nome = "Bob"
animal1.especie = "cachorro"
animal1.idade = 3
console.log(animal1.emitirSom("AUUUUUUUUUUUUUUUUU!"))
console.log(animal1.exibirDetalhes())

// problema 5

function criarPlaylist() {
    return {
        nome: "",
        autor: "",
        musicas: [],
        adicionarMusica: function(msc) {
            let music = msc.toLowerCase()
            this.musicas.push(music)
        },
        removerMusica: function(msc) {
            let indice = this.musicas.findIndex(M => M === msc.toLowerCase())

            if (indice === -1){
                return "Música não encontrada para remoção"
            } else {
            this.musicas.splice(indice, 1)
            }
        },
        listarMusicas: function() {
     if (this.musicas.length === 0) {
                   return `Nenhuma música para listar`
                }
                else {
            let arr = []
            let c = 0
          for (let e of this.musicas) {
                c += 1
                let elemento = ` ${c}-${e}`
                arr.push(elemento)
            }
            let str = arr.join(",")
            return str
        }

        },
        quantidadeDeMusicas: function() {
        let qtd = this.musicas.length
            if (qtd === 0) {
                return `Essa playlist não tem músicas`
            }
            return qtd
        }
    }
}

let playlist = criarPlaylist()

playlist.nome = "Playlist 1"
playlist.autor = "Fulano"
playlist.musicas  = ["msc1", "msc2", "msc3"]

playlist.adicionarMusica("msc")
console.log(playlist.listarMusicas())

console.log(playlist.quantidadeDeMusicas())

console.log(playlist.removerMusica("msc4"))
console.log(playlist.listarMusicas())

console.log(playlist.quantidadeDeMusicas())

// Problema 6

function criarProduto() {
    return {
        nome: "",
        preco: 0.0,
        quantidade: 0,
        aumentarQuantidade: function(qtd) {
            qtd = parseInt(qtd)
            this.quantidade += qtd
        },
        diminuirQuantidade: function(qtd) {
            qtd = parseInt(qtd)
            if (qtd > this.quantidade) {
         console.log(`Venda não realizada! quantidade superior ao estoque`)
            } else {
               this.quantidade = this.quantidade - qtd
            }
        },
        atualizarPreco: function(novoPreco) {
          this.preco = parseFloat(novoPreco)
        },
        exibirInformacoes: function() {
            if (this.nome === "") {
                return `Coloque o nome do produto`
            }
            return `Nome: ${this.nome}, Preço: R$ ${this.preco} e quantidade: ${this.quantidade} unidades`
        }
    }
}

let produto = criarProduto()
produto.nome = "Escova de dente"
produto.preco = 2.50
produto.quantidade = 50

produto.aumentarQuantidade(4)
produto.diminuirQuantidade(55)

produto.atualizarPreco(1.0)

console.log(produto.exibirInformacoes())