const htmlUtils = require('../utils/htmlUtils');
const preferences = require('../../../config/preferences');

function getNumberOfPages(products) {
    if (products && products.length) {
        const numberOfPages = products.length / preferences.paginationPageSize;
        return Math.ceil(numberOfPages);
    }

    return 0;
}

function showPagination(numberOfPages) {
    const paginationBlock = document.querySelector('.js-pagination');
    htmlUtils.clearNode(paginationBlock);

    if (numberOfPages > 1) {
        for (let i = 0; i < numberOfPages; i += 1) {
            paginationBlock.insertAdjacentHTML('beforeend',
                `<div class="b-page__pagination_element js-pagination-element"
                    data-index=${i}
                >
                    ${i + 1}
                </div>`);
        }
    }
}

function init(products) {
    const numberOfPages = getNumberOfPages(products);
    showPagination(numberOfPages);
}

module.exports = {
    init
};
