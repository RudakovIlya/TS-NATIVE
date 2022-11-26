import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    // 1) Исходные данные
    a = 200;
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // 2) Действие(action)

    const result = sum(a, b);

    // 3) expect (ожидаемый результат) result

    expect(result).toBe(3);

});

test('sums should be correct', () => {

    // 1) Исходные данные

    // const a = 1;
    // const b = 2;
    // const c = 3;

    // 2) Действие(action)

    const result1 = sum(a, b);
    const result2 = sum(a, c);

    // 3) expect (ожидаемый результат) result

    expect(result1).toBe(3);
    expect(result2).toBe(4);

})

test('multiply should be correct', () => {

    // 1) Исходные данные

    // const a = 1;
    // const b = 2;
    // const c = 3;

    // 2) Действие(action)

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    // 3) expect (ожидаемый результат) result

    expect(result1).toBe(2);
    expect(result2).toBe(6);

})

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friends!';
    const sent2 = 'JS - programming language'

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends!');

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');

})