const ALL_PRODUCTS = require('./product/products');
const search = require('./search/search');
const productTile = require('./product/productTile');
const htmlUtils = require('./utils/htmlUtils');
const sortingUtils = require('./utils/sorting');
const pagination = require('./search/pagination');

const productGrid = document.getElementsByClassName('js-product-grid')[0];
let selectedSorting = document.querySelector('.js-sorting').value;
let products = ALL_PRODUCTS;
let paginationPage = 0;

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
    const pageProducts = pagination.getPageProducts(paginationPage, sortedProducts);
    htmlUtils.clearNode(productGrid);

    for (let i = 0; i < pageProducts.length; i += 1) {
        const element = pageProducts[i];
        const tile = productTile.render(element);
        productGrid.appendChild(tile);
    }
}

function initEvents() {
    const sortingSelector = document.querySelector('.js-sorting');
    sortingSelector.addEventListener('change', (event) => {
        selectedSorting = event.currentTarget.value;
        pagination.init(products);
        paginationPage = 0;
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
        pagination.init(products);
        paginationPage = 0;
        showProducts();
    });

    const clearSearchButton = document.querySelector('.js-clear-search');
    clearSearchButton.addEventListener('click', () => {
        const searchInput = document.querySelector('.js-search input');

        search.hideSearchTitle();
        searchInput.value = '';
        products = ALL_PRODUCTS;

        pagination.init(products);
        paginationPage = 0;
        showProducts();
    });

    const paginationBlock = document.querySelector('.js-pagination');
    paginationBlock.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-pagination-element')) {
            const element = event.target;
            if (element.classList.contains('active')) {
                return;
            }

            const previousElement = paginationBlock.querySelector('.js-pagination-element.active');
            if (previousElement) {
                previousElement.classList.remove('active');
            }
            element.classList.add('active');
            paginationPage = element.dataset.index;

            showProducts();
        }
    });
}

function app() {
    pagination.init(products);
    showProducts();
    initEvents();
}

app();
