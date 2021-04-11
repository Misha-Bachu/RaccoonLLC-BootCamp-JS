const MasterProduct = require('./MasterProduct');
const VariantProductSerializer = require('../../serializers/products/VariantProductSerializer');

class VariantProduct extends MasterProduct {
    constructor(productData) {
        super(productData);

        this.variantAttributes = productData.variantAttributes;
        this.masterID = productData.masterID;
    }

    get master() {
        const ProductMgr = require('../../managers/ProductMgr');

        const masterProduct = ProductMgr.getProductById(this.masterID);

        return masterProduct;
    }

    getVariantAttributes() {
        return this.variantAttributes;
    }

    getMasterID() {
        return this.masterID;
    }

    getMaster() {
        return this.master;
    }

    serialize() {
        return new VariantProductSerializer(this);
    }
}

module.exports = VariantProduct;
