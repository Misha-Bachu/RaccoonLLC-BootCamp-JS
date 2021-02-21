'use strict'

const allProducts = require('./product/products');
const search = require('./search/search');
const productTile = require('./product/productTile');
const htmlUtils = require('./utils/htmlUtils');
const sortingUtils = require('./utils/sorting');

const productGrid = document.getElementsByClassName('js-product-grid')[0];
let selectedSorting = document.querySelector('.js-sorting').value;
let products = allProducts;

function showProducts(parentNode, arrayOfProducts) {
    htmlUtils.clearNode(parentNode);

    for(const element of arrayOfProducts) {
        const tile = productTile.render(element);
        parentNode.appendChild(tile);
    }
}

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

function initEvents() {
    const sortingSelector = document.querySelector('.js-sorting');
    sortingSelector.addEventListener('change', event => {
        selectedSorting = event.currentTarget.value;
        const sortedProducts = getSortedProducts(selectedSorting, products);
        htmlUtils.clearNode(productGrid);
        showProducts(productGrid, sortedProducts);
    })

    const searchForm = document.querySelector('.js-search');
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const value = event.currentTarget.querySelector('input').value;
        const searchTitle = document.querySelector('.js-search-title');

        if (!value) {
            return;
        }

        searchTitle.classList.remove('d-none');
        products = search.search(value, products);
        const sortedProducts = getSortedProducts(selectedSorting, products);
        showProducts(productGrid, sortedProducts);
    });

    const clearSearchButton = document.querySelector('.js-clear-search');
    clearSearchButton.addEventListener('click', () => {
        const searchTitle = document.querySelector('.js-search-title');
        const searchInput = document.querySelector('.js-search input');

        searchTitle.classList.add('d-none');
        searchInput.value = '';
        products = allProducts;

        const sortedProducts = getSortedProducts(selectedSorting, products);
        showProducts(productGrid, sortedProducts);
    });
}

function app() {
    const sortedProducts = getSortedProducts(selectedSorting, products);

    showProducts(productGrid, sortedProducts);

    initEvents();
}

app();
