const axios = require('axios');

const { url, key } = require('./credentials').novaposhta;

async function searchCity(query) {
    const result = await axios.post(url, {
        apiKey: key,
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
            CityName: query,
            Limit: 5
        }
    });

    const cities = result.data.data[0].Addresses;

    return cities;
}

module.exports = {
    searchCity
};
