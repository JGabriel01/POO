class calculadora {
    static somar(a,b) {
        return parseInt(a + b)
    }

    static subtrair(a,b) {
        return parseInt(a - b)
    }

    static multiplicar(a,b) {
        return parseInt(a * b)
    }
}

 console.log(calculadora.somar(5, 10))
 console.log(calculadora.subtrair(5, 10))