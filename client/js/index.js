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

async function showQuickView(url) {
    const response = await window.fetch(url, {
        method: 'GET'
    });

    if (response.status === 200) {
        const modal = document.querySelector('.js-modal');
        const body = modal.querySelector('.js-modal-body');
        htmlUtils.clearNode(body);

        const text = await response.text();
        body.innerHTML = text;
        modal.classList.remove('d-none');
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
        if (value && value !== '') {
            const url = `${searchForm.action}?q=${value}`;
            window.location = url;
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-quick-view')) {
            event.preventDefault();
            const url = event.target.attributes['data-url'].value;
            showQuickView(url);
            return;
        }

        if (event.target.classList.contains('js-close-modal')) {
            event.target.closest('.js-modal').classList.add('d-none');
        }
    });
}

function app() {
    initEvents();
}

app();
