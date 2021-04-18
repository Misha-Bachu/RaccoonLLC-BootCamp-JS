const reCaptchaService = require('../scripts/services/recaptcha');
const preferences = require('../config/preferences');

async function validateReCaptcha (req, res, next) {
    if (!preferences.recaptchaEnabled) {
        return next();
    }

    const token = req.query['g-recaptcha-response'];

    const result = await reCaptchaService.verifyReCaptcha(token);

    if (result) {
        return next();
    }

    res.redirect('/');
}

module.exports = {
    validateReCaptcha
}
