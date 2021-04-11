const BaseSerializer = require('../BaseSerializer');

class VariationAttributeSerializer extends BaseSerializer {
    constructor(variationAttribute) {
        super(variationAttribute);

        this.id = variationAttribute.id;
        this.name = variationAttribute.name;
        this.options = variationAttribute.options.map((option) => option.serialize());
    }
}

module.exports = VariationAttributeSerializer;
