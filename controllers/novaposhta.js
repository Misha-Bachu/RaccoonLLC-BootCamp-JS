const Router = require('express');

const router = Router();
const npService = require('../scripts/services/novaposhta');

router.get('/show', async (req, res) => {
    const { q } = req.query;
    const cities = await npService.searchCities(q);

    res.render('novaposhta/show', {
        q,
        cities
    });
});

module.exports = router;
