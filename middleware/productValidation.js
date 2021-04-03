function emptyProductId(req, res, next) {
    const { pid } = req.query;

    if (pid === undefined || pid === '') {
        res.redirect('/home');
        return;
    }

    next();
}

module.exports = {
    emptyProductId
};
