const time = new Date().getTime();
let index  = 1;

function getNormalRandom() {
    return Math.random();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function freezer() {
    const data_to_Tago = [{
        variable: 'switched_on',
        value: getNormalRandom() < 0.8 ? true : false,
        serie: time
    }, {
        variable: 'door',
        value: getNormalRandom() < 0.5 ? true : false,
        serie: time
    }, {
        variable: 'temperature',
        value: getRandomArbitrary(23, 47),
        unit: 'F',
        serie: time
    }, {
        variable: 'power',
        value: getRandomArbitrary(200, 600),
        unit: 'W',
        serie: time
    }, {
        variable: 'index',
        value: index,
        serie: time
    }];
    index += 1;

    return data_to_Tago;
}

module.exports = freezer;
