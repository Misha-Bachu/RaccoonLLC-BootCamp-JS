const Router = require('express');
const productHelpers = require('../scripts/helpers/productHelpers');
const preferences = require('../config/preferences');

const router = Router();

router.get('^/$|/home', (req, res) => {
    let products = productHelpers.getProducts();
    products = products.slice(0, preferences.homepageProductQuantity);

    res.render('homepage', {
        products
    });
});

module.exports = router;
