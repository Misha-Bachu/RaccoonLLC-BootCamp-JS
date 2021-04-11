const Router = require('express');

const router = Router();
const npService = require('../scripts/services/novaposhta');

router.get('/show', async (req, res) => {
    const { q } = req.query;
    const cities = await npService.searchCity(req.query.q);

    res.render('novaposhta/search', { cities, q });
});

module.exports = router;
