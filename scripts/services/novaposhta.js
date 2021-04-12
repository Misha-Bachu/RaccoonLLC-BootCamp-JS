const axios = require('axios');

async function searchCities(q) {
    const result = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: '902b23be1ab4c1bbdc74ada7c82a52c3',
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
            CityName: q,
            Limit: 100
        }
    });
    const addresses = result.data.data[0].Addresses;
    return addresses;
}

module.exports = {
    searchCities
};
