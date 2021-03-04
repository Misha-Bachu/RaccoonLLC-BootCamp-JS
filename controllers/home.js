const Router = require('express');
const path = require('path');

const router = Router();

router.get('^/$|/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'staticHomePage.html'));
});

module.exports = router;
