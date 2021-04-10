const BaseSerializer = require('../BaseSerializer');

class ProductSerializer extends BaseSerializer {
    constructor(product) {
        super(product);

        this.id = product.id;
        this.image = product.image;
        this.name = product.name;
        this.author = product.author;
        this.description = product.description;
        this.price = product.price;
        this.type = product.type;
    }
}

module.exports = ProductSerializer;
