const ProductSerializer = require('../../serializers/products/ProductSerializer');

class Product {
    constructor(productData) {
        this.id = productData.id;
        this.image = productData.image;
        this.name = productData.name;
        this.author = productData.author;
        this.description = productData.description;
        this.price = productData.price;
        this.type = productData.type;
    }

    getID() {
        return this.id;
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.name;
    }

    getAuthor() {
        return this.author;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }

    serialize() {
        return new ProductSerializer(this);
    }
}

module.exports = Product;
