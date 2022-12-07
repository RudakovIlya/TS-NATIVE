import {
    addBookForNewUser,
    isAge,
    moveToMoscow,
    upgradeLaptopForNewUser,
    UserType, UserWithBooks,
    UserWithLaptop
} from "./immutability";


test('reference type test', () => {
    let user: UserType = {
        name: ' Dimych',
        hair: 32,
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    const usersToAge = {...isAge(user)};

    expect(usersToAge.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(usersToAge.address).toBe(user.address);
})


test('change address', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: ' Dimych',
        hair: 32,
        age: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['Js', 'React', 'TypeScript'],
    }

    const newUser = moveToMoscow(user, 'Moscow');

    expect(user).not.toBe(newUser);
    expect(user.address).not.toBe(newUser.address);
    expect(newUser.address.title).toBe('Moscow');
    expect(user.address.title).toBe('Minsk');
    expect(user.laptop).toBe(newUser.laptop);
})


test('upgrade user laptop macbook', () => {
    let user: UserWithLaptop = {
        name: ' Dimych',
        hair: 32,
        age: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const newLaptop = upgradeLaptopForNewUser(user, 'macbook');

    expect(user).not.toBe(newLaptop);
    expect(user.laptop).not.toBe(newLaptop.laptop);
    expect(newLaptop.laptop.title).toBe('macbook');
    expect(user.laptop.title).toBe('ZenBook');

    expect(user.address).toBe(newLaptop.address);

})


test('copy books', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: ' Dimych',
        hair: 32,
        age: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['Js', 'React', 'TypeScript'],
    }

    const userCopy = addBookForNewUser(user, 'Redux');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.address.title).toBe('Minsk');
    expect(user.address.title).toBe('Minsk');
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books).not.toBe(userCopy.books);
})