const htmlUtils = require('./utils/htmlUtils');

const productGrid = document.getElementsByClassName('js-product-grid')[0];

async function showProducts(url) {
    const response = await window.fetch(url, {
        method: 'GET'
    });

    if (response.status === 200) {
        htmlUtils.clearNode(productGrid);
        const text = await response.text();
        productGrid.innerHTML = text;
    }
}

function initEvents() {
    const sortingSelector = document.querySelector('.js-sorting');
    if (sortingSelector) {
        sortingSelector.addEventListener('change', (event) => {
            const url = event.currentTarget.options[event.currentTarget.selectedIndex].attributes['data-url'].value;

            showProducts(url);
        });
    }

    const searchForm = document.querySelector('.js-search');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const { value } = event.currentTarget.querySelector('input');

        if (!value) {
            return;
        }

        const url = `${searchForm.action}?q=${value}`;
        window.location = url;
    });
}

function app() {
    initEvents();
}

app();
