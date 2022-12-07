import {
    addBookForNewUser, addNewCompanies,
    isAge,
    moveToMoscow, updateBooks, updateUserCompaniesName,
    upgradeLaptopForNewUser,
    UserType, UserWithBooks, UserWithCompanies,
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
    expect(userCopy.books[3]).toBe('Redux');
    expect(user.books[3]).toBe(undefined);
    expect(user.books.length).toBe(3);
    expect(userCopy.books.length).toBe(4);
})

test('update js to ts', () => {
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
        books: ['Js', 'React', 'css', 'html'],
    }

    const newUserBooks = updateBooks(user, 'Js', 'TS');

    expect(user).not.toBe(newUserBooks);
    expect(user.books).not.toBe(newUserBooks.books);
    expect(user.books.length).toBe(4);
    expect(newUserBooks.books.length).toBe(4);
    expect(newUserBooks.books[0]).toBe('TS');
    expect(user.books[0]).toBe('Js');

    expect(user).not.toBe(newUserBooks);
    expect(user.address).toBe(newUserBooks.address);
    expect(newUserBooks.address.title).toBe('Minsk');
    expect(user.address.title).toBe('Minsk');
    expect(user.laptop).toBe(newUserBooks.laptop);

})

test('test companies', () => {
    const user: UserWithLaptop & UserWithCompanies = {
        name: ' Dimych',
        hair: 32,
        age: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'EPAM'}, {id: 2, title: 'IN-INCUBATOR'}]
    }

    const copyUserWithNewCompanies = addNewCompanies(user);

    const newUser = updateUserCompaniesName(user, 'Епам', 1)

    expect(user).not.toBe(copyUserWithNewCompanies);
    expect(user.companies).not.toBe(copyUserWithNewCompanies.companies);

    expect(user.companies).not.toBe(newUser.companies);
    expect(user.companies[0].title).toBe('EPAM')
    expect(newUser.companies[0].title).toBe('Епам')

})
