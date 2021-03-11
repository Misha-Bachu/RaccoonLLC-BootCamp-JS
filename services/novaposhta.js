const axios = require('axios');
const SettlementModel = require('../models/SettlementModel');
const config = require('./credentials/novaposhta.json');

async function searchSettlement(q) {
    if (!q) {
        return [];
    }

    const body = {
        apiKey: config.key,
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
            CityName: q,
            Limit: 100
        }
    };

    const serviceResponce = await axios.post(config.url, body);
    const { data } = serviceResponce.data;

    const result = data[0].Addresses.map((address) => new SettlementModel(address));

    return result;
}

module.exports = {
    searchSettlement
};
