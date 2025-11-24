function inverter(str) {
    return str.split("").reverse().join("")
}

function contar(str) {
    return str.length
}

module.exports = {
    inverter,
    contar
}