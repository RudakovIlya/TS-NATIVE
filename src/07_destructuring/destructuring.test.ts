export type ManType = {

    name: string
    age: number
    lessons: Array<{ title: string }>,
    address: {
        street: {
            streetName: string
        }

    }
}

let man: ManType;
beforeEach(() => {
    man = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                streetName: 'Sovetov'
            }
        }
    }
})


test('age should be correct', () => {


    const {name, age, lessons, address: {street: {streetName}}} = man;
    const [first, seconds] = lessons;

    expect(age).toBe(32);
    expect(name).toBe('Dimych');
    expect(streetName).toBe('Sovetov');
    expect(first.title).toBe('1')

})

test('lessons should be correct', () => {
    const {name, age, lessons, address: {street: {streetName}}} = man;
    const [first, ...rest] = lessons;
    expect(first.title).toBe('1');

})