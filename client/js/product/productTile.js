const htmlUtils = require('../utils/htmlUtils');

function render(pdict) {
    const htmlString = `
        <div class="b-product-tile js-product-tile">
        <a href="#" class="b-product-tile__image-link">
            <img class="b-product-tile__image" src="${pdict.image}">
        </a>
        <div class="b-product-tile__details">
            <div class="b-product-tile__author">${pdict.author}</div>
            <div class="b-product-tile__name">${pdict.name}</div>
            <div class="b-product-tile__description">${pdict.description}</div>
            <div class="b-product-tile__variations">
                <span class="b-variation__item m-active">Book</span>
                <span class="b-variation__item">eBook</span>
            </div>
            <div class="b-product-tile__price">${pdict.price}$</div>
            <a href="#" class="btn btn-add-to-cart js-add-to-cart">
                <i class="fa fa-cart-plus"></i> Add to Cart
            </a>
        </div>
    </div>`;

    return htmlUtils.createHTMLElementFromString(htmlString);
}

module.exports = {
    render
};
