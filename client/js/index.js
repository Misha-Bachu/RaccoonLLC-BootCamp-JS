'use strict'

const products = require('./product/products')
const productTile = require('./product/productTile')
const htmlUtils = require('./utils/htmlUtils')
const sortingUtils = require('./utils/sorting')

const productGrid = document.getElementsByClassName('js-product-grid')[0];

function showProducts(parentNode, arrayOfProducts) {
    for(const element of arrayOfProducts) {
        const tile = productTile.render(element)
        parentNode.appendChild(tile)
    }
}

function getSortedProducts(sortingId) {
    switch (sortingId) {
        case 'author':
            return sortingUtils.sortProductsByAuthor(products)
        case 'price-high-to-low':
            return sortingUtils.sortProductsByPriceHighToLow(products)
        case 'price-low-to-high':
            return sortingUtils.sortProductsByPriceLowToHigh(products)
        default:
            return [];
    }
}

function initEvents() {
    const sortingSelector = document.querySelector('.js-sorting')

    sortingSelector.addEventListener('change', event => {
        const sortedProducts = getSortedProducts(event.currentTarget.value)
        htmlUtils.clearNode(productGrid)
        showProducts(productGrid, sortedProducts)
    })

    const searchForm = document.querySelector('.js-search')
    searchForm.addEventListener('submit', event => {
        event.preventDefault()
        const value = event.currentTarget.querySelector('input').value

        console.log(value)
    })
}

function app() {
    const sortedProducts = getSortedProducts(document.querySelector('.js-sorting').value)

    showProducts(productGrid, sortedProducts)

    initEvents()
}

app()
