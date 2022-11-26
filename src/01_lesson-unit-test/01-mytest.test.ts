import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 4;
    c = 5;
})

test('sum should be correct', () => {

    const result_1 = sum(a, b);
    const result_2 = sum(a, c);
    const result_3 = sum(b, c);

    expect(result_1).toBe(5);
    expect(result_2).toBe(6);
    expect(result_3).toBe(9);

});

test('multiply should be correct', () => {

    const result_1 = mult(a, b);
    const result_2 = mult(a, c);
    const result_3 = mult(b, c);

    expect(result_1).toBe(4);
    expect(result_2).toBe(5);
    expect(result_3).toBe(20);

});

