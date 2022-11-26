import {StudentType} from "../02_lesson-object/02";
import {CityType, GovernmentBuildingsAddressType, GovernmentBuildingsType, HouseType} from "../02_lesson-object/02_02";

debugger

export const sum = (a: number, b: number) => {
    return a + b;
};

export const addSkills = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
};

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyBudget = (city: GovernmentBuildingsType, money: number) => {
    city.budget += money;
    return city.budget
};

export const repairedHouse = (house: HouseType) => {
    house.repaired = true;
}

export const increasedStaff = (staff: GovernmentBuildingsType, num: number) => {
    staff.staffCount += num;
}