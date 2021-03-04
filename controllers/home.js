const Router = require('express');
const productHelper = require('../scripts/helpers/productHelper');

const router = Router();

router.get('^/$|/home', (req, res) => {
    const products = productHelper.getProducts().slice(0, 3);

    res.render('homepage', {
        products
    });
});

module.exports = router;
