let boletim = {
  nomeAluno: "Ana Clara",
  turma: "922K",
  notas: {
    matematica: 10,
    portugues: 7,
    historia: 9
  },
  
  calcularMedia: (ob) => {
    let notas = ob.notas
    let soma = 0
    let tamanho = Object.keys(notas)
    for (let i in notas) {
      soma += notas[i]
    }
    let media = soma/tamanho.length
    return media.toFixed(2)
  },
  
  verificarStatus: (media) => {
    
  }
}

console.log(boletim.calcularMedia(boletim))

