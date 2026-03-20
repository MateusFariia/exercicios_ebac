function calculoMDC(a, b) {
    while (b !== 0) {
        let d = a % b;
        a = b;
        b = d;
    }
    return a;
}

module.exports = {calculoMDC}