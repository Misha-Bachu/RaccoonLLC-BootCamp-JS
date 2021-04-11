const Router = require('express');

const router = Router();

const productValidation = require('../middleware/productValidation');
const productHelpers = require('../scripts/helpers/productHelpers');

router.get('/quick-view', (req, res) => {
    const { pid } = req.query;
    const product = productHelpers.getProduct(pid);

    res.render('product/quickViewModal', {
        product
    });
});

router.get('/show', productValidation.emptyProductId, (req, res) => {
    const product = productHelpers.getProduct(req.query.pid);

    res.render('product/productDetail', {
        product
    });
});

module.exports = router;
