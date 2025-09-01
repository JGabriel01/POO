let music = {
    titulo: "GB",
    artista: "JG",
    album: "Hello World",
    duracaoMinutos: 2
}

let music2 = {
    titulo: "HB",
    artista: "JG",
    album: "Hello World",
    duracaoMinutos: 3.4
}

let music3 = {
    titulo: "CB",
    artista: "JG",
    album: "Hello World",
    duracaoMinutos: 5
}

let music4 = {
    titulo: "IB",
    artista: "JG",
    album: "Hello World",
    duracaoMinutos: 2.1
}

let playlistViagem = [music, music2, music3, music4]

function totalMin(arr) {
let total = 0
for (let i in arr) {
  total += arr[i].duracaoMinutos
}
return `A duração total da playlist é de ${total} minutos`
}
 
function musicaMaisLonga(arr) {
    let maisLonga = 0
    let titulo = ""
    let autor = ""
    for (let i in arr) {
    if (arr[i].duracaoMinutos > maisLonga) {
        maisLonga = arr[i].duracaoMinutos
        titulo = arr[i].titulo
        autor = arr[i].artista
    }
    }
    return `Na playlist a faixa mais longa é a música ${titulo} do artista ${autor} com ${maisLonga} minutos.`
}

console.log(musicaMaisLonga(playlistViagem), totalMin(playlistViagem))