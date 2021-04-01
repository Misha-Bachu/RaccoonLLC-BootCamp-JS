const Router = require('express');
const productHelpers = require('../scripts/helpers/productHelpers');

const router = Router();

router.get('/quick-view', (req, res) => {
    const { pid } = req.query;
    const product = productHelpers.getProductById(pid);

    res.render('product/quickViewModal', {
        product
    });
});

module.exports = router;
