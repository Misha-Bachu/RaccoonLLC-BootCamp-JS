const ALL_PRODUCTS = require('../../config/products');

function getProducts() {
    return ALL_PRODUCTS;
}

function getProductById(id) {
    const products = getProducts();

    for (let i = 0; i < products.length; i += 1) {
        if (products[i].id === id) {
            return products[i];
        }
    }

    return null;
}

module.exports = {
    getProducts,
    getProductById
};
