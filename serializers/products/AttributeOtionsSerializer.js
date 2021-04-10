const BaseSerializer = require('../BaseSerializer');

class AttributeOptionSerializer extends BaseSerializer {
    constructor(attributeOption) {
        super(attributeOption);

        this.id = attributeOption.id;
        this.name = attributeOption.name;
        this.selected = attributeOption.selected;
    }
}

module.exports = AttributeOptionSerializer;
