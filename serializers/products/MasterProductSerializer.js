const ProductSerializer = require('./ProductSerializer');

class MasterProductSerializer extends ProductSerializer {
    get variationAttributes() {
        const variationModel = this.raw.getVariationModel();

        const serializedVariationModel = variationModel.serialize();

        const { variationAttributes } = serializedVariationModel;

        return variationAttributes;
    }
}

module.exports = MasterProductSerializer;
