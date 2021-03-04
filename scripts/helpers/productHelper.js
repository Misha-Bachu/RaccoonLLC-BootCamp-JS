const products = require('../../config/products.json');

function getProducts() {
    return products.slice();
}

function getProductById(id) {
    if (id !== undefined && id !== null) {
        for (let i = 0; i < products.length; i += 1) {
            if (products[i].id === id) {
                return products[i];
            }
        }
    }

    return null;
}

module.exports = {
    getProducts,
    getProductById
};
