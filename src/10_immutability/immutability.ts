export type UserType = {
    name: string
    age: number
    hair: number
    address: { title: string }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

export function isAge(u: UserType) {
    const copy = {
        ...u,
        hair: u.hair / 2,
    }
    return copy
}

export const moveToMoscow = (user: UserWithLaptop, city: string) => {
    return {...user, address: {...user.address, title: city}}
}

export const upgradeLaptopForNewUser = (user: UserWithLaptop, laptop: string) => {
    return {...user, laptop: {...user.laptop, title: laptop}}
}

export const addBookForNewUser = (user: UserWithLaptop & UserWithBooks, book: string) => {
    return {...user, books: [...user.books, book]}
}