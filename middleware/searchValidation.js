
function emptyField(req, res, next) {
    console.log(req.params.q)

    next()
}

module.exports = {
    emptyField
}
