const ALL_PRODUCTS = require('../../config/products');
const search = require('./search/search');
const productTile = require('./product/productTile');
const htmlUtils = require('./utils/htmlUtils');
const sortingUtils = require('./utils/sorting');

const productGrid = document.getElementsByClassName('js-product-grid')[0];
let selectedSorting = document.querySelector('.js-sorting').value;
let products = ALL_PRODUCTS;

function getSortedProducts(sortingId, arrayOfProducts) {
    switch (sortingId) {
        case 'author':
            return sortingUtils.sortProductsByAuthor(arrayOfProducts);
        case 'price-high-to-low':
            return sortingUtils.sortProductsByPriceHighToLow(arrayOfProducts);
        case 'price-low-to-high':
            return sortingUtils.sortProductsByPriceLowToHigh(arrayOfProducts);
        default:
            return [];
    }
}

function showProducts() {
    const sortedProducts = getSortedProducts(selectedSorting, products);

    htmlUtils.clearNode(productGrid);

    for (let i = 0; i < sortedProducts.length; i += 1) {
        const element = sortedProducts[i];
        const tile = productTile.render(element);
        productGrid.appendChild(tile);
    }
}

function initEvents() {
    const sortingSelector = document.querySelector('.js-sorting');
    sortingSelector.addEventListener('change', (event) => {
        selectedSorting = event.currentTarget.value;
        showProducts();
    });

    const searchForm = document.querySelector('.js-search');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const { value } = event.currentTarget.querySelector('input');

        if (!value) {
            return;
        }

        search.showSearchTitle(value);
        products = search.search(value, ALL_PRODUCTS);
        showProducts();
    });

    const clearSearchButton = document.querySelector('.js-clear-search');
    clearSearchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('.js-search input');

        search.hideSearchTitle();
        searchInput.value = '';
        products = ALL_PRODUCTS;

        showProducts();
    });
}

function app() {
    showProducts();
    initEvents();
}

app();
