function initEvents(commonData) {
    $('.js-quick-view').on('click', function () {
        const data = $(this).closest('.js-product').data('product-info') || {};

        dataLayer.push({
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {
                        'list': commonData.pageName
                    },
                    'products': [{
                        'name': data.name,
                        'id': data.id,
                        'price': data.price,
                        'author': data.author
                    }]
                }
            }
        });
    });

    $(document).on('gtm:trackProducts', () => {
        const products = $('.js-product');
        const productsData = [];
        let position = 1;
        products.each((i) => {
            const data = $(products[i]).data('product-info');
            if (!data) {
                return;
            }

            productsData.push({
                'name': data.name,
                'id': data.id,
                'price': data.price,
                'author': data.author,
                'list': commonData.pageName,
                'position': position
            });
            position += 1;
        });

        dataLayer.push({
            'ecommerce': {
                'currencyCode': 'USD',
                'impressions': [...productsData]
            }
        });
    });

    $('.js-add-to-cart').on('click', function () {
        const data = $(this).closest('.js-product').data('product-info') || {};
        dataLayer.push({
            'event': 'customAddToCartClick',
            'product': {
                'id': data.id,
                'name': data.name,
                'price': data.price
            }
        });
    });
}

function handleEvents(events = []) {
    events.forEach((item) => dataLayer.push(item));
}

function init() {
    const commonData = $('.js-gtm-common-data').data('gtm') || {};
    if (!commonData.GTMEnabled) {
        return;
    }

    handleEvents(commonData.events);
    initEvents(commonData);

    $(document).trigger('gtm:trackProducts');
}

module.exports = {
    init
};
