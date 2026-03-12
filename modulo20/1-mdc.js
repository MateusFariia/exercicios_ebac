function calculoMDC(a, b) {
    while (b !== 0) {
        let d = a % b;
        a = b;
        b = d;
    }
    return a;
}

let num1 = 18
let num2 = 60

let resultado = calculoMDC(num1, num2)

console.log(`o MDC de ${num1} e ${num2} é: ${resultado}`)