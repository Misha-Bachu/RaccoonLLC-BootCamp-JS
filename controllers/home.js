const Router = require('express');

const router = Router();

const preferences = require('../config/preferences');
const productHelpers = require('../scripts/helpers/productHelpers');
const gtm = require('../middleware/gtm');

router.get('^/$|/home', gtm.commonData, (req, res, next) => {
    const products = productHelpers.getProducts(preferences.homepageProductQuantity);

    res.render('homepage', {
        products,
        gtm: res.locals.gtm
    });
    next();
});

module.exports = router;
