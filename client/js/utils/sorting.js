'use strict'


function sortProductsByPriceHighToLow(products) {
    const sortedProducts = products.sort((a, b) => {
        const aPrice = +a.price
        const bPrice = +b.price
        if (aPrice > bPrice) {
            return -1;
        } else if (aPrice < bPrice) {
            return 1;
        }
        return 0;
    })
    return sortedProducts;
}

function sortProductsByPriceLowToHigh(products) {
    const sortedProducts = products.sort((a, b) => {
        const aPrice = +a.price
        const bPrice = +b.price
        if (+aPrice > +bPrice) {
            return 1;
        } else if (+aPrice < +bPrice) {
            return -1;
        }
        return 0;
    })
    return sortedProducts;
}

function sortProductsByAuthor(products) {
    const sortedProducts = products.sort((a, b) => {
        if (a.author > b.author) {
            return 1;
        } else if (a.author < b.author) {
            return -1;
        }
        return 0;
    })
    return sortedProducts;
}

module.exports = {
    sortProductsByPriceHighToLow,
    sortProductsByPriceLowToHigh,
    sortProductsByAuthor
}
