let fuel_level = 100;
let index      = 1;
const time     = new Date().getTime();

function getRandomArbitrary(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

function car() {
    let lat = '-23.550' + getRandomArbitrary(100, 999);
    let lng = '-46.633' + getRandomArbitrary(100, 999);

    if (fuel_level < 10) fuel_level = 100;
    let lower = getRandomArbitrary(1, 15);
    fuel_level -= lower;

    const data_to_Tago = [{
        variable: 'speed',
        value: getRandomArbitrary(1, 100),
        unit: 'mhp',
        serie: time
    }, {
        variable: 'rpm',
        value: getRandomArbitrary(1000, 6000),
        serie: time
    }, {
        variable: 'fuel',
        value: fuel_level,
        unit: '%',
        serie: time
    }, {
        variable: 'location_car',
        value: 'car',
        location: { lat: parseFloat(lat), lng: parseFloat(lng) },
        serie: time
    }, {
        variable: 'march',
        value: getRandomArbitrary(1, 5),
        serie: time
    }, {
        variable: 'brake',
        value: Math.random() < 0.5 ? false : true,
        serie: time
    }, {
        variable: 'index',
        value: index,
        serie: time
    }];
    index += 1;
    
    return data_to_Tago;
}

module.exports = car;