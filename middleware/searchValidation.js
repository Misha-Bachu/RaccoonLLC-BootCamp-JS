function emptyField(req, res, next) {
    const { q } = req.query;

    if (q === undefined || q === '') {
        res.redirect('/home');
        return;
    }

    next();
}

module.exports = {
    emptyField
};
