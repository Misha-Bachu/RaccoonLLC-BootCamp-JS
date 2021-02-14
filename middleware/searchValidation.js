function emptyField(req, res, next) {
    // eslint-disable-next-line no-console
    console.log(req.params.q);

    next();
}

module.exports = {
    emptyField
};
