var express = require('express')
var path = require('path')
var search = require('./controllers/search.js')
var home = require('./controllers/home.js')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.use('/static', express.static('static'))
app.use('/css', express.static('css'))

app.use(search)
app.use(home)

app.get('/feature', (req, res) => {
    res.render('features', { title: 'features' })
});

app.listen(port, () => {
    console.log(`The app listening at http://localhost:${port}`)
})