import {StudentType} from "../02_lesson-object/02";
import {addSkills, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
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
});

test('new tech skill should be added to student', () => {

    expect(student.technologies.length).toBe(4);

    addSkills(student, 'TypesScript');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('TypesScript');
    expect(student.technologies[4].id).toBeDefined();

});

test('student should be active', () => {

    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

});

test('does student live in city?', () => {

    expect(doesStudentLiveIn(student, 'Minsk')).toBe(true);

});
