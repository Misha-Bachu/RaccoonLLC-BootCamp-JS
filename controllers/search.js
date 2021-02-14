const Router = require('express');

const searchValidation = require('../middleware/searchValidation');

const router = Router();

router.get('/show/:q', searchValidation.emptyField, (req, res) => {
    res.send('Hello World! search');
});

router.get('/ajax', (req, res) => {
    res.json({ test: 123 });
});

module.exports = router;
