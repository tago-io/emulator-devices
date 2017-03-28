let fuel_level = 100;
let index = 1;

function getRandomArbitrary(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

function car() {
    let lat = '-23.550' + getRandomArbitrary(1, 100);
    let lng = '-46.633' + getRandomArbitrary(1, 100);

    if (fuel_level < 10) fuel_level = 100;
    let lower = getRandomArbitrary(1, 100);
    fuel_level -= lower;

    const data_to_Tago = [{
        variable: 'speed',
        value: getRandomArbitrary(1, 100),
        unit: 'mhp'
    }, {
        variable: 'rpm',
        value: getRandomArbitrary(1000, 6000)
    }, {
        variable: 'fuel',
        value: fuel_level,
        unit: '%'
    }, {
        variable: 'lacation_car',
        value: 'car',
        location: { lat: parseFloat(lat), lng: parseFloat(lng) }
    }, {
        variable: 'march',
        value: getRandomArbitrary(1, 5)
    }, {
        variable: 'brake',
        value: Math.random() < 0.5 ? false : true
    }, {
        variable: 'index',
        value: index
    }];
    index += 1;

    return data_to_Tago;
}

module.exports = car;