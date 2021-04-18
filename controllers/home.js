const Router = require('express');

const router = Router();

const preferences = require('../config/preferences');
const productHelpers = require('../scripts/helpers/productHelpers');
const gtm = require('../middleware/gtm');
const seo = require('../middleware/seo');

router.get('^/$|/home', gtm.commonData, seo.pageMetadata, (req, res, next) => {
    const products = productHelpers.getProducts(preferences.homepageProductQuantity);

    res.render('homepage', {
        products,
        gtm: res.locals.gtm,
        metadata: res.locals.metadata
    });
    next();
});

module.exports = router;
