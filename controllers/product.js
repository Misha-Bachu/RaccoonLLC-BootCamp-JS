const Router = require('express');
const productValidation = require('../middleware/productValidation');
const productHelper = require('../scripts/helpers/productHelper');

const router = Router();

router.get('/show', productValidation.emptyProductId, (req, res) => {
    const product = productHelper.getProductById(req.query.pid);

    res.render('product/productDetail', {
        product
    });
});

router.get('/quick-view', (req, res) => {
    const product = productHelper.getProductById(req.query.pid);

    res.render('product/quickViewModal', {
        product
    });
});

module.exports = router;
