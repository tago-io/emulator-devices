let temperature = 32;
let index = 1;
const time = new Date().getTime();
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function thermostat() {
    let lower = getRandomArbitrary(1, 5);
    temperature += lower;
    if (temperature > 272) temperature = getRandomArbitrary(50, 272);
    const data_to_Tago = [{
        variable: 'temperature',
        value: temperature,
        unit: 'F',
        serie: time
    }, {
        variable: 'index',
        value: index,
        serie: time
    }];
    index += 1;

    return data_to_Tago;
}

module.exports = thermostat;