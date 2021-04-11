const AttributeOption = require('./AttributeOption');
const VariationAttributeSerializer = require('../../serializers/products/VariationAttributeSerializer');

class VariationAttribute {
    constructor(variationAttributeData) {
        this.id = variationAttributeData.id;
        this.name = variationAttributeData.name;

        this.options = variationAttributeData.options.map((option) => new AttributeOption(option));
    }

    get selectedOption() {
        const selectedOption = this.options.find((option) => option.selected);

        return selectedOption;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getOptions() {
        return this.options;
    }

    getSelectedOption() {
        return this.selectedOption;
    }

    getOption(attributeOption) {
        const searchedOption = this.options.find((option) => option.id === attributeOption);

        return searchedOption;
    }

    selectOption(attributeOption) {
        const option = this.getOption(attributeOption);

        if (!option) {
            return false;
        }

        if (option.isSelected()) {
            return true;
        }

        const selectedOption = this.getSelectedOption();

        if (selectedOption) {
            selectedOption.unSelectOption();
        }

        option.selectOption();

        return true;
    }

    serialize() {
        return new VariationAttributeSerializer(this);
    }
}

module.exports = VariationAttribute;
