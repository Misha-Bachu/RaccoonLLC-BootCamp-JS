const productHelper = require('./productHelper');

function getProductsFromBasket(basket) {
    if (!basket) {
        return [];
    }

    const products = [];

    for (const item of Object.values(basket)) {
        const product = productHelper.getProductById(item.id);

        if (product) {
            product.quantity = item.quantity || 1;
            products.push(product);
        }
    }

    return products;
}

module.exports = {
    getProductsFromBasket
};
