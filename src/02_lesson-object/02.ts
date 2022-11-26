type TechnologiesType = {
    id: number,
    title: string,
}
type LocalCityType = {
    title: string,
    country: string,
}
type StudentAddress = {
    streetTitle: string,
    city: LocalCityType
}
export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: StudentAddress,
    technologies: Array<TechnologiesType>,
}


export const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Suroganova 2',
        city: {
            title: 'Minsk',
            country: 'Belarus',
        },
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'JS',
        },
        {
            id: 3,
            title: 'Redux',
        },
        {
            id: 4,
            title: 'React',
        },
    ]
};

console.log(student.age)
console.log(student.address.city)
console.log(student.technologies[2].title)
