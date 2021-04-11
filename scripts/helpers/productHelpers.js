const Product = require('../../models/products/Product');
const MasterProduct = require('../../models/products/MasterProduct');
const VariantProduct = require('../../models/products/VariantProduct');

function createProduct(apiProduct) {
    let product = null;

    if (apiProduct.type === 'standard') {
        product = new Product(apiProduct);
    } else if (apiProduct.type === 'master') {
        product = new MasterProduct(apiProduct);
    } else if (apiProduct.type === 'variant') {
        product = new VariantProduct(apiProduct);
    }

    return product;
}

function getProducts(productCount) {
    const ProductMgr = require('../../managers/ProductMgr');

    const products = ProductMgr.getProducts();
    let slicedProducts = products;

    if (productCount && typeof productCount === 'number') {
        slicedProducts = products.slice(0, productCount);
    }

    const serializedProducts = slicedProducts.map((product) => product.serialize());

    return serializedProducts;
}

function getProduct(productID) {
    const ProductMgr = require('../../managers/ProductMgr');

    const product = ProductMgr.getProductById(productID);
    const serializedProduct = product.serialize();

    return serializedProduct;
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
};
