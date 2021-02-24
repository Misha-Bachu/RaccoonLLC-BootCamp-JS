const express = require('express');
const path = require('path');

const search = require('./controllers/search.js');
const home = require('./controllers/home.js');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));

app.use('/static', express.static('static'));
app.use('/css', express.static('css'));

app.use('/search', search);
app.use(home);

app.get('/feature', (req, res) => {
    res.render('features', { title: 'features' });
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`The app listening at http://localhost:${port}`);
});
