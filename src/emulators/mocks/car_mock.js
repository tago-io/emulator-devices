const car_mock = [
    {
        variable: 'location_car',
        value: 'car',
        unit: null,
        location: {
            lat: -23.55014,
            lng: -46.63323
        },
        serie: 1490902262093
    },
    {
        variable: 'speed',
        value: 14,
        unit: 'mhp',
        location: null,
        serie: 1490902262093
    },
    {
        variable: 'fuel',
        value: 94,
        unit: '%',
        location: null,
        serie: 1490902262093
    },
    {
        variable: 'rpm',
        value: 3034,
        unit: null,
        location: null,
        serie: 1490902262093
    },
    {
        variable: 'march',
        value: 1,
        unit: null,
        location: null,
        serie: 1490902262093
    },
    {
        variable: 'brake',
        value: false,
        unit: null,
        location: null,
        serie: 1490902262093
    }
];

function car() {
    return car_mock;
}

module.exports = car;