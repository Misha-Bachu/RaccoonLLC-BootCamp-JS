const Router = require('express');

const router = Router();

const preferences = require('../config/preferences');
const productHelpers = require('../scripts/helpers/productHelpers');

router.get('^/$|/home', (req, res) => {
    const products = productHelpers.getProducts(preferences.homepageProductQuantity);

    res.render('homepage', {
        products
    });
});

module.exports = router;
