'use strict';

const fieldsForSearch = ['name', 'author', 'description'];

function search(queryString, arrayForSearch) {
    if (!Array.isArray(arrayForSearch)) {
        return [];
    }
    const q = queryString.toLowerCase();
    return arrayForSearch.filter((item) => {
        for (const property of fieldsForSearch) {
            const field = item[property];
            if (field && field.toLowerCase().indexOf(q) !== -1) {
                return true;
            }
        }
    })
}

module.exports = {
    search
};
