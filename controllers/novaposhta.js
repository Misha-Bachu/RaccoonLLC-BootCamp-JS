const Router = require('express');

const router = Router();
const npService = require('../scripts/services/novaposhta');
const { validateReCaptcha } = require('../middleware/recaptcha');
const credentials = require('../config/credentials');
const preferences = require('../config/preferences');


router.get('/show', async (req, res) => {
    // renders empty search page
    res.render('novaposhta/search', {
        cities: [],
        warehouses: [],
        q: '',
        city: '',
        reCaptchaKey: credentials.recaptcha.client,
        recaptchaEnabled: preferences.recaptchaEnabled
    });
});

router.get('/search', validateReCaptcha, async (req, res) => {
    const { q, city } = req.query;

    const cities = q ? await npService.searchCity(req.query.q) : [];
    const warehouses = city ? await npService.searchWarehouse(city) : [];

    res.render('novaposhta/search', {
        cities,
        warehouses,
        q: q || '',
        city,
        googleKey: credentials.google.key,
        reCaptchaKey: credentials.recaptcha.client,
        recaptchaEnabled: preferences.recaptchaEnabled
    });
});

module.exports = router;
