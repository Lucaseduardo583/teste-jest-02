const divisao = require('./divisao');

//divisao 10 / 2 para dar 3
test('divisao 10 / 2 deve ser igual a 5', () => {
    expect(divisao(10,2)).toBe(5)
})

//divisao 9 / 3 para dar 0
test('divisao 9 / 3 deve ser igual a 3', () => {
    expect(divisao(9,3)).toBe(3)
})

//divisao -9 / -3 para dar 0
test('divisao -9 / -3 deve ser igual a -3', () => {
    expect(divisao(12,3)).toBe(4)
})

//divisao -9 / 3 para dar -3
test('divisao -9 / 3 deve ser igual a -3', () => {
    expect(divisao(-9,3)).toBe(-3)
})

//divisao 9 / -3 para dar -3
test('divisao 9 / -3 deve ser igual a -3', () => {
    expect(divisao(9,-3)).toBe(-3)
})

// //divisao 1 / 0 para dar 'não pode dividir por 0
// test('divisao 1 / 0 para dar não pode dividir por 0', () => {
//     expect(divisao(1,0)).toBe(0)
// })

test('divisao 1 / 0 para dar erro "Não pode dividir por 0"', () => {
    expect(() => divisao(1, 0)).toThrow('Não pode dividir por 0');
});