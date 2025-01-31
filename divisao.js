function divisao(a,b) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (b === 0) {
        throw new Error('Não pode dividir por 0');
    }
    return a / b;
}
module.exports = divisao;
