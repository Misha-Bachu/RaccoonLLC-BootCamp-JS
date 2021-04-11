const VariationModelSerializer = require('../../serializers/products/VariationModelSerialzier');

class VariationModel {
    constructor(product) {
        this.currentProduct = product;
    }

    get master() {
        const { currentProduct } = this;

        const masterProduct = currentProduct.isMaster()
            ? currentProduct
            : currentProduct.getMaster();

        return masterProduct;
    }

    get variants() {
        const ProductMgr = require('../../managers/ProductMgr');

        const { master } = this;

        const masterVariants = ProductMgr.getMasterVariants(master);

        return masterVariants;
    }

    get defaultVariants() {
        const { variants } = this;

        const defaultVariant = variants.length ? variants[0] : null;

        return defaultVariant;
    }

    get selectedVariant() {
        const { currentProduct } = this;

        const selectedVariation = !currentProduct.isMaster() ? currentProduct : null;

        return selectedVariation;
    }

    get variationAttributes() {
        const VariationAttributeMgr = require('../../managers/VariationAttributeMgr');

        const { master } = this;
        const { currentProduct } = this;

        const attributes = VariationAttributeMgr.getVariationAttributes(master.id);

        if (!currentProduct.isMaster()) {
            attributes.forEach((attribute) => {
                const { variantAttributes } = currentProduct;

                const selectedAttributeOption = variantAttributes[attribute.id];

                if (selectedAttributeOption) {
                    attribute.selectOption(selectedAttributeOption);
                }
            });
        }

        return attributes;
    }

    getMaster() {
        return this.master;
    }

    getVariants() {
        return this.variants;
    }

    getDefaultVariant() {
        return this.defaultVariant;
    }

    getSelectedVariant() {
        return this.selectedVariant;
    }

    getVariationAttributes() {
        return this.variationAttributes;
    }

    serialize() {
        return new VariationModelSerializer(this);
    }
}

module.exports = VariationModel;
