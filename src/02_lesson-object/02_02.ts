export type StreetType = {
    title: string,
}
export type AddressType = {
    number: number,
    street: StreetType,
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType,
}

export type GovernmentBuildingsAddressType = {
    street: StreetType
}

export type GovernmentBuildingsType = {
    type: 'Hospital' | 'Fire-Station',
    budget: number,
    staffCount: number,
    address: GovernmentBuildingsAddressType,
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number,
}