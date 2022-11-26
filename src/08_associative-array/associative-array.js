import {Users} from "./associative-array";

const user = {
    "name": "Ilych",
    "age": 24,
    "address": {
        "city": {
            "title": "Abinsk",
        }
    }
};

const users = ['Ilych', 'Dima', 'Yana', 'Andrei'];

console.log(users['0']);

const usersObj = {
    '0': 'Ilych',
    '1': 'Dima',
    '2': 'Yana',
    '3': 'Andrei'
}

export const usersObject = {
    '100': {id: 100, name: 'Ilych'},
    '1231': {id: 1231, name: 'Dima'}, // Ключ элемента соответствует id значения
    '1223231': {id: 1223231, name: 'Yana'},
    '1212431': {id: 1212431, name: 'Andrei'},
}

const user = {id: 100500, name: 'IIIGOOORRR'};

usersObject[user.id] = user;