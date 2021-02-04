var Router = require('express')
var path = require('path')

const router = Router()

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'staticHomePage.html'))
})

module.exports = router
