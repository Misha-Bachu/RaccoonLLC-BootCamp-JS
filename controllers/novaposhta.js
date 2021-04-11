const Router = require('express');

const router = Router();
const npService = require('../scripts/services/novaposhta');

router.get('/show', async (req, res) => {
    const { q, city } = req.query;

    const cities = q ? await npService.searchCity(req.query.q) : [];
    const warehouses = city ? await npService.searchWarehouse(city) : [];

    res.render('novaposhta/search', {
        cities,
        warehouses,
        q,
        city
    });
});

module.exports = router;
