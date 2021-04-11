const apiProducts = require('../config/products_2.json');
const productHelpers = require('../scripts/helpers/productHelpers');
const CONSTANTS = require('../scripts/common/constants');

class ProductMgr {
    static getProducts() {
        const products = apiProducts.map((apiProduct) => {
            const product = productHelpers.createProduct(apiProduct);

            return product;
        });

        return products;
    }

    static getProductById(id) {
        if (id === undefined && id === null) {
            return null;
        }

        const productData = apiProducts.find((apiProduct) => apiProduct.id === id);

        const product = productHelpers.createProduct(productData);

        return product;
    }

    static findProducts(searchCallback) {
        let result = [];

        if (!searchCallback || typeof searchCallback !== 'function') {
            return result;
        }

        const products = this.getProducts();

        result = products.filter(searchCallback);

        return result;
    }

    static getMasterVariants(product) {
        let variants = [];

        if (product.type === CONSTANTS.product.STANDARD_PRODUCT_TYPE) {
            return null;
        }

        if (!product.isMaster()) {
            return variants;
        }

        variants = this.findProducts((productItem) => {
            const isVariant = productItem.type === CONSTANTS.product.VARIANT_PRODUCT_TYPE;

            const isMasterVariation = isVariant && productItem.masterID === product.id;

            return isMasterVariation;
        });

        return variants;
    }
}

module.exports = ProductMgr;
