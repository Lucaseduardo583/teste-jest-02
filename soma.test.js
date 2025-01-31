const soma = require('./soma')

// test('descrição do teste', função de teste)
test('soma 2 + 2 deve ser igual a 4', () => {
    expect(soma(2,2)).toBe(4)
})

test('soma 3 + 3 deve ser igual a 6', () => {
    expect(soma(3,3)).toBe(6)
})

test('soma -2 + -2 deve ser igual a -4', () => {
    expect(soma(-2,-2)).toBe(-4)
})

test('soma 0 + 0 deve ser igual a 0', () => {
    expect(soma(0,0)).toBe(0)
})

test('soma "1" + 2 deve ser igual a 3', () => {
    expect(soma("1",2)).toBe(3)
})

