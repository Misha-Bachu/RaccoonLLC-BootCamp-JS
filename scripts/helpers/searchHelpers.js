const fieldsForSearch = ['name', 'author', 'description'];

function search(queryString, arrayForSearch) {
    if (!Array.isArray(arrayForSearch)) {
        return [];
    }
    const q = queryString.toLowerCase();
    return arrayForSearch.filter((item) => {
        for (let i = 0; i < fieldsForSearch.length; i += 1) {
            const property = fieldsForSearch[i];
            const field = item[property];
            if (field && field.toLowerCase().indexOf(q) !== -1) {
                return true;
            }
        }
        return false;
    });
}

module.exports = {
    search,
    fieldsForSearch
};
