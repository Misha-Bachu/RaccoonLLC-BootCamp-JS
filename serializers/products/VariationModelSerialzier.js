const BaseSerializer = require('../BaseSerializer');

class VariationModelSerializer extends BaseSerializer {
    get variants() {
        const serializedVariants = this.raw.variants.map((variant) => variant.serialize());

        return serializedVariants;
    }

    get defaultVariant() {
        const defaultVariant = this.raw.getDefaultVariant();

        const serializedVariant = defaultVariant.serialize();

        return serializedVariant;
    }

    get selectedVariant() {
        const chosenVariant = this.raw.getSelectedVariant();

        const serializedVariant = chosenVariant.serialize();

        return serializedVariant;
    }

    get variationAttributes() {
        const variantAttributes = this.raw.getVariationAttributes();

        const serializedAttributes = variantAttributes.map((attribute) => attribute.serialize());

        return serializedAttributes;
    }
}

module.exports = VariationModelSerializer;
