function incrAge(u: UserType) {
    u.age += 1
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}
test('reference type test', () => {

    const user: UserType = {
        name: 'Ilych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    incrAge(user)

    expect(user.age).toBe(33);

    const s = user;

    s.age = 1000;

    expect(user.age).toBe(1000);
})


test('array type test', () => {

    const users = [
        {
            name: 'Ilych',
            age: 21,
        },
        {
            name: 'Dima',
            age: 24,
        }
    ]
    const admins = users;
    admins.push({name: 'Bandyugan', age: 10})
    expect(users[2]).toStrictEqual({name: 'Bandyugan', age: 10});
})

test('value reference type test', () => {

    const usersCount = 100;

    let adminsCount = usersCount;
    ++adminsCount
    expect(adminsCount).toBe(101);
})


test('reference1 type test', () => {

    const user: UserType = {
        name: 'Ilych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    const user2: UserType = {
        name: 'Nata',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Minsk City'

    expect(user.address.title).toEqual('Minsk City');
})

test('array type test test', () => {

    const user: UserType = {
        name: 'Ilych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    const user2: UserType = {
        name: 'Nata',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: 'Had', age: 18, address: {title: 'Abinsk'}}];

    const admins = [user, user2];

    admins[0].name = 'Dmitri';

    expect(admins[0].name).toEqual('Dmitri');
})
