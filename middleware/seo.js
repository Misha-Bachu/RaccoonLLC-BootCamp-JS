const pageHelpers = require('../scripts/helpers/pageHelpers');

function pageMetadata(req, res, next) {
    const metadata = { ...res.locals.metadata };
    const pageInfo = pageHelpers.getPageInfoByPath(req.path);

    if (pageInfo) {
        metadata.title = pageInfo.title;
        metadata.description = pageInfo.description;
        metadata.keywords = pageInfo.keywords;
        metadata.canonicalUrl = pageInfo.canonicalUrl;
    }

    res.locals.metadata = metadata;
    next();
}

module.exports = {
    pageMetadata
};
