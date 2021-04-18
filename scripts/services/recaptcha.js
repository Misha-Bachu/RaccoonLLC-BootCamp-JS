const axios = require('axios');

const { secret } = require('../../config/credentials').recaptcha;

async function verifyReCaptcha(token) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
    const result = await axios.post(url);

    return result.data.success;
}

module.exports = {
    verifyReCaptcha
};
