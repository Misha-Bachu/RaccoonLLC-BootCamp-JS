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

async function searchWarehouse(cityID) {
    const result = await axios.post(url, {
        apiKey: key,
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
            CityRef: cityID,
            Limit: 50
        }
    });

    const warehouses = result.data.data;

    return warehouses;
}

module.exports = {
    searchCity,
    searchWarehouse
};
