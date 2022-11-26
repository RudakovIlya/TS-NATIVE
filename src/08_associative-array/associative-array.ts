
export type Users = {
    [key: string]: { id: number, name: string }
}

export const usersObject: Users = {
    '100': {id: 100, name: 'Ilych'},
    '1231': {id: 1231, name: 'Dima'}, // Ключ элемента соответствует id значения
    '1223231': {id: 1223231, name: 'Yana'},
    '1212431': {id: 1212431, name: 'Andrei'},
}

const user = {id: 100500, name: 'IIIGOOORRR'};

delete usersObject['100'];
usersObject[user.id].name = 'Vit';
usersObject[user.id] = user;

export const usersArray = [
    {id: 100, name: 'Ilych'},
    {id: 1231, name: 'Dima'},
    {id: 1223231, name: 'Yana'},
    {id: 1212431, name: 'Andrei'},
]
