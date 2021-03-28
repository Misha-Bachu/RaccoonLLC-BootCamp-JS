const Router = require('express');
const productHelper = require('../scripts/helpers/productHelper');
const preferences = require('../config/preferences');

const router = Router();

router.get('^/$|/home', (req, res) => {
    const products = productHelper.getProducts().slice(0, preferences.homepageProductQuantity);

    res.render('homepage', {
        products
    });
});

module.exports = router;
