const Product = require('./Product');
const constants = require('../../scripts/common/constants');
const VariationModel = require('./VariationModel');
const MasterProductSerializer = require('../../serializers/products/MasterProductSerializer');

class MasterProduct extends Product {
    get variationModel() {
        const variationModel = new VariationModel(this);

        return variationModel;
    }

    getVariationModel() {
        return this.variationModel;
    }

    isMaster() {
        return this.type === constants.product.MASTER_PRODUCT_TYPE;
    }

    serialize() {
        return new MasterProductSerializer(this);
    }
}

module.exports = MasterProduct;
