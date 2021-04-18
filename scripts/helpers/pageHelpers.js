const pagesData = require('../../config/pagesData');

function getPageInfoByPath(path) {
    const result = pagesData.find((page) => new RegExp(page.path).test(path));
    return result;
}

module.exports = {
    getPageInfoByPath
};
