type Users = {
    [key: string]: { id: number, name: string }
}

let usersObject: Users = {}


beforeEach(() => {
    usersObject = {
        '100': {id: 100, name: 'Ilych'},
        '1231': {id: 1231, name: 'Dima'}, // Ключ элемента соответствует id значения
        '1223231': {id: 1223231, name: 'Yana'},
        '1212431': {id: 1212431, name: 'Andrei'},
    }
});

test('should test correct', () => {
    usersObject['100'].name = 'Ilya';

    expect(usersObject['100'].name).toBe('Ilya');
    expect(usersObject['100']).toEqual({id: 100, name: 'Ilya'});


})

test('should delete test correct', () => {
  delete  usersObject['100']

    expect(usersObject['100']).toBeUndefined();


})