import {CityType} from "../02_lesson-object/02_02";
import {addMoneyBudget, increasedStaff, repairedHouse} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        }],
        governmentBuildings: [
            {
                type: 'Hospital', budget: 200000, staffCount: 1000,
                address: {
                    street: {
                        title: 'Central street',
                    }
                }
            },
            {
                type: 'Fire-Station', budget: 200000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South street',
                    }
                }
            },
        ],
        citizensNumber: 1000000,
    }
});

test('budget should be changed for Hospital', () => {

    addMoneyBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)

});

test('house should be repaired', () => {

    repairedHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();

});

test('staff should be increased', () => {

    increasedStaff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[1].staffCount).toBe(1020);

});

