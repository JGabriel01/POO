let cor = "azul"

function mod(color) {
    let cor2 = color
    console.log(`-- Antes da modificação --`)
    console.log(`Cor 1: ${color}`)
    console.log(`Cor 2: ${cor2}`)

    color = "Preto"
    console.log(`-- Depois da modificação --`)
    console.log(`Cor 1: ${color}`)
    console.log(`Cor 2: ${cor2}`)
}
mod(cor)