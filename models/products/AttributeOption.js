/**
 * Global requirers
 */
const AttributeOptionSerializer = require('../../serializers/products/AttributeOtionsSerializer');

/**
 * @class AttributeOption
 * Representation of API Attribute Option Data
 */
class AttributeOption {
    /**
     * Creates Attribute Option
     * @constructs AttributeOption
     * @param  {Object} attributeOption - attribute option API data
     * @param {string} attributeOption.id - option identifier
     * @param {string} attributeOption.name - option name
     */
    constructor(attributeOption) {
        this.id = attributeOption.id;
        this.name = attributeOption.name;
        this.selected = false;
    }

    /**
     * Class getters
     */

    /**
     * Gets identifier of AttributeOption instance
     * @returns {string} ID of attribute option
     */
    getID() {
        return this.id;
    }

    /**
     * Gets attribute name of AttributeOption instance
     * @returns {string} name of attribute option
     */
    getName() {
        return this.name;
    }

    /**
     * Class methods
     */

    /**
     * Selects the current attribute option
     */
    selectOption() {
        this.selected = true;
    }

    /**
     * Unselects the current attribute option
     */
    unSelectOption() {
        this.selected = false;
    }

    /**
     * Returns selected state for current attribute option
     * @returns {boolean} selected state
     */
    isSelected() {
        return this.selected;
    }

    /**
     * AttributeOption serializer that prepare AttributeOption model's data for sending
     * @typedef {Object} AttributeOptionSerializer
     */

    /**
     * Serializes AttributeOption class instance
     * @returns {AttributeOptionSerializer} serialized instance
     */
    serialize() {
        return new AttributeOptionSerializer(this);
    }
}

module.exports = AttributeOption;
