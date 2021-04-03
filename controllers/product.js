const Router = require('express');
const productHelpers = require('../scripts/helpers/productHelpers');
const productValidation = require('../middleware/productValidation');

const router = Router();

router.get('/quick-view', (req, res) => {
    const { pid } = req.query;
    const product = productHelpers.getProductById(pid);

    res.render('product/quickViewModal', {
        product
    });
});

router.get('/show', productValidation.emptyProductId, (req, res) => {
    const product = productHelpers.getProductById(req.query.pid);

    res.render('product/productDetail', {
        product
    });
});

module.exports = router;
