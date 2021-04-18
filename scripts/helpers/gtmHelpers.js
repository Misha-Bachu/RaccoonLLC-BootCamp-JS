const preferences = require('../../config/preferences');

function getProductInfo(productData) {
    if (preferences.GTMEnabled) {
        const result = {
            id: productData.id,
            name: productData.name,
            author: productData.author,
            price: productData.price
        };

        return result;
    }

    return {};
}

module.exports = {
    getProductInfo
};
