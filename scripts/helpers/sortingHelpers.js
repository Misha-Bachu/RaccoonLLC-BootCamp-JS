const sortingOptions = require('../../config/sortingOptions');

function getSortingOptions() {
    return sortingOptions.slice();
}

function sortProductsByPriceHighToLow(products) {
    const sortedProducts = products.sort((a, b) => {
        const aPrice = +a.price;
        const bPrice = +b.price;
        if (aPrice > bPrice) {
            return -1;
        }
        if (aPrice < bPrice) {
            return 1;
        }
        return 0;
    });
    return sortedProducts;
}

function sortProductsByPriceLowToHigh(products) {
    const sortedProducts = products.sort((a, b) => {
        const aPrice = +a.price;
        const bPrice = +b.price;
        if (+aPrice > +bPrice) {
            return 1;
        }
        if (+aPrice < +bPrice) {
            return -1;
        }
        return 0;
    });
    return sortedProducts;
}

function sortProductsByAuthor(products) {
    const sortedProducts = products.sort((a, b) => {
        if (a.author > b.author) {
            return 1;
        }
        if (a.author < b.author) {
            return -1;
        }
        return 0;
    });
    return sortedProducts;
}

function getSortedProducts(sortingId, arrayOfProducts) {
    switch (sortingId) {
        case 'author':
            return sortProductsByAuthor(arrayOfProducts);
        case 'price-high-to-low':
            return sortProductsByPriceHighToLow(arrayOfProducts);
        case 'price-low-to-high':
            return sortProductsByPriceLowToHigh(arrayOfProducts);
        default:
            return [];
    }
}

function getDefaultSorting() {
    for (let i = 0; i < sortingOptions.length; i += 1) {
        if (sortingOptions[i].selected) {
            return sortingOptions[i];
        }
    }

    return sortingOptions[0];
}

function applyDefaultsSorting(products) {
    const defaultSorting = getDefaultSorting();
    return getSortedProducts(defaultSorting.id, products);
}

function addSearchURl(url, query, options) {
    const result = [];
    for (let i = 0; i < options.length; i += 1) {
        const sorting = options[i];
        sorting.url = `${url}?q=${query}&sortId=${options[i].id}`;
        result.push(sorting);
    }

    return result;
}

module.exports = {
    getSortingOptions,
    sortProductsByPriceHighToLow,
    sortProductsByPriceLowToHigh,
    sortProductsByAuthor,
    getSortedProducts,
    getDefaultSorting,
    applyDefaultsSorting,
    addSearchURl
};
