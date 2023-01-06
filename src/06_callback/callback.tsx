import React, {MouseEvent} from "react";
import {GovernmentBuildingsType, HouseType} from "../02_lesson-object/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map((b) => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map((h) => h.address.street.title);
}

export const createMessages = (houses: Array<HouseType>) => {

    const callback = (h: HouseType) => {
        debugger
        return `Hello guys from ${h.address.street.title}`
    }
    const newArr = houses.map(callback);

    return newArr
}

export const User = () => {

    const saveUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(123)
    }
    const nameChanged = (event: MouseEvent<HTMLButtonElement>) => {
        saveUser?.(event)
    }

    function identity<T>(arg: T): T {
        console.log(arg)
        return arg;
    }
    identity('2')

    return (
        <div>
            Dimych
            <button name={'delete'} onClick={nameChanged}>delete</button>
            <button name={'save'} onClick={saveUser}>save</button>
        </div>
    )
}