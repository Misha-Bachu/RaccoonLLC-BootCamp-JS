const Router = require('express');

const { searchSettlement } = require('../services/novaposhta');

const router = Router();

router.get('/show', async (req, res) => {
    const q = req.query.q || '';
    const settlements = await searchSettlement(q);
    res.render('novaposhta/landing', { settlements, q });
});

module.exports = router;
