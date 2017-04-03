const freezer_mock = [
    {
        variable: 'switched_on',
        value: true,
        unit: null,
        serie: 1490902522825
    },
    {
        variable: 'door',
        value: false,
        unit: null,
        serie: 1490902522825
    },
    {
        variable: 'temperature',
        value: 37,
        unit: 'F',
        serie: 1490902522825
    },
    {
        variable: 'power',
        value: 546,
        unit: 'W',
        serie: 1490902522825
    }
];

function freezer(){
    return freezer_mock;
}

module.exports = freezer;