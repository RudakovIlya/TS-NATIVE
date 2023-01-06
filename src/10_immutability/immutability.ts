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

type CompanyType = {
    id: number
    title: string
}

export type UserWithCompanies = {
    companies: CompanyType[]
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

export const addBookForNewUser = (user: UserWithLaptop & UserWithBooks, book: string) => ({
    ...user,
    books: [...user.books, book]
})
export const updateBooks = (user: UserWithLaptop & UserWithBooks, oldBook: string, newBook: string) => ({
    ...user, books: user.books.map(item =>
        item === oldBook ? newBook : item
    )
})

export const addNewCompanies = (users: UserWithLaptop & UserWithCompanies) => (
    {...users, companies: [...users.companies, {id: 3, title: 'Google'}]}
)

export const updateUserCompaniesName = (users: UserWithLaptop & UserWithCompanies, title: string, id: number) => (
    {...users, companies: users.companies.map(c => c.id === id ? {...c, title} : c)}
)
