var Router = require('express')

const router = Router()

router.get('/search-show', (req, res) => {
    res.send('Hello World! search')
})

router.get('/search-ajax', (req, res) => {
    res.json({test: 123})
})

module.exports = router
