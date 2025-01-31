const multiplicacao = require('./multiplicacao');

//multiplicacao 3 * 4 para dar 12
test('multiplicacao 3 * 4 deve ser igual a 12', () => {
    expect(multiplicacao(3,4)).toBe(12)
})

//multiplicacao -1 * -1 para dar 1
test('multiplicacao -1 / -1 deve ser igual a 1', () => {
    expect(multiplicacao(-1,-1)).toBe(1)
})

//multiplicacao 0 * 5 para dar 0
test('multiplicacao 0 * 5 deve ser igual a 0', () => {
    expect(multiplicacao(0,5)).toBe(0)
})

//multiplicacao "3" * 3 para dar 0
test('multiplicacao "3" * 3 deve ser igual a 0', () => {
    expect(multiplicacao("3",3)).toBe(9)
})
