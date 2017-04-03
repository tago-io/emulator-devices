let temperature = 32;
const time = new Date().getTime();
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function thermostat() {
    let lower = getRandomArbitrary(1, 5);
    temperature += lower;
    if (temperature >= 272) temperature = getRandomArbitrary(32, 272);
    const data_to_Tago = {
        variable: 'temperature',
        value: temperature,
        unit: 'F',
        serie: time,
    }
    return data_to_Tago;
}

module.exports = thermostat;