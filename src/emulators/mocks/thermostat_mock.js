const thermostat_mock = {
    variable: 'temperature',
    value: 36,
    unit: 'F',
    serie: 1490902922031
};
function thermostat(){
    return thermostat_mock;
}
module.exports = thermostat;