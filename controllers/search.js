const Router = require('express');

const searchValidation = require('../middleware/searchValidation');

const router = Router();

router.get('/show', searchValidation.emptyField, (req, res) => {
    const { q } = req.query;

    res.send(q);
});

router.get('/ajax', (req, res) => {
    const { q, sortId } = req.query;

    res.send(q + sortId);
});

module.exports = router;
