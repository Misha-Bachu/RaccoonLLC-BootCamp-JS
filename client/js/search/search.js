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

function showSearchTitle(query) {
    const searchTitle = document.querySelector('.js-search-title');
    const searchWord = document.querySelector('.js-search-word');

    searchTitle.classList.remove('d-none');
    searchWord.textContent = query;
}

function hideSearchTitle() {
    const searchTitle = document.querySelector('.js-search-title');
    searchTitle.classList.add('d-none');
}

module.exports = {
    search,
    showSearchTitle,
    hideSearchTitle
};
