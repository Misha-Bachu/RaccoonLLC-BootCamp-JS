/**
 * Global requirers
 */
const apiVariationAttr = require('../config/variationAttributes.json');
const VariationAttribute = require('../models/products/VariationAttribute');

/**
 * VariationAttribute model thats represent VariationAttribute
 * raw data with additional business logic
 * @typedef {Object} VariationAttribute
 */

/**
 * @class VariationAttributeMgr
 * Process retrieved VariationAttribute data from JSON to model
 */
class VariationAttributeMgr {
    /**
     * Gets variation attributes for a given product ID
     * @param {string} productID - given product ID
     * @returns {Array.<VariationAttribute>} array of variation attribute models
     */
    static getVariationAttributes(productID) {
        const rawVariationAttr = apiVariationAttr.filter((attr) => attr.masterID === productID);

        const productVariationAttr = rawVariationAttr.map((data) => new VariationAttribute(data));

        return productVariationAttr;
    }
}

module.exports = VariationAttributeMgr;
