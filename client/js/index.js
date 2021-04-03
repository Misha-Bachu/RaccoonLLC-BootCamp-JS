const htmlUtils = require('./utils/htmlUtils');
const basketComponent = require('./cart/basketComponent');

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

function showQuickView(url) {
    window.fetch(`${window.location.origin}${url}`, {
        method: 'GET'
    }).then((response) => {
        if (response.status === 200) {
            const modal = document.querySelector('.js-modal');
            const body = modal.querySelector('.js-modal-body');
            htmlUtils.clearNode(body);

            response.text().then((text) => {
                body.innerHTML = text;
                modal.classList.add('b-page__modal--open');
            });
        }
    });
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
        }

        if (event.target.classList.contains('js-close-modal')) {
            event.preventDefault();
            event.target.closest('.js-modal').classList.remove('b-page__modal--open');
        }
    });
}

function app() {
    initEvents();
    basketComponent.init();
}

app();
