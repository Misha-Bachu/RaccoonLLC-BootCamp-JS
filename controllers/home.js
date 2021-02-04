var Router = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World! home page!')
})

module.exports = router
