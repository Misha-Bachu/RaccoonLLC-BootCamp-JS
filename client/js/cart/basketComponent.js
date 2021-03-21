const basketMgr = require('./basketMgr');

function updateMiniCartQuantity() {
    const totalQuantity = basketMgr.getTotalQuantity();
    $('.js-minicart-quantity').text(totalQuantity || '');
}

function initEvents() {
    $(document).on('click', '.js-add-to-cart', function(event) {
        event.preventDefault();
        const pid = $(this).closest('.js-product').data('pid');

        if (pid) {
            basketMgr.addProduct(pid);
            updateMiniCartQuantity();
        }
    });

    $(document).on('click', '.js-minicart-icon', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');

        $.ajax({
            url: `${window.location.origin}/${url}`,
            method: 'GET',
            data: {
                basket: basketMgr.getOrCreateBasket()
            },
            success: (data) => {
                $('.js-minicart').html(data).show();
            }
        });
    });
}

function init() {
    initEvents();
    updateMiniCartQuantity();
}

module.exports = {
    init
};
