const Router = require('express');

const router = Router();

const basketHelper = require('../scripts/helpers/basketHelper');

router.get('/minicart', (req, res) => {
    const { basket } = req.query;
    const products = basketHelper.getProductsFromBasket(basket);

    res.render('cart/minicart', {
        products
    });
});

module.exports = router;
