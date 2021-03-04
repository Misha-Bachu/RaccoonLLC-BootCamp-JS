const Router = require('express');

const searchValidation = require('../middleware/searchValidation');
const productHelper = require('../scripts/helpers/productHelper');
const searchHelper = require('../scripts/helpers/searchHelper');
const sortingHelper = require('../scripts/helpers/sortingHelper');

const router = Router();

router.get('/show', searchValidation.emptyField, (req, res) => {
    const { q } = req.query;
    const allProducts = productHelper.getProducts();
    let sortingOptions = sortingHelper.getSortingOptions();

    sortingOptions = sortingHelper.addSearchURl('/search/ajax', q, sortingOptions);
    let searchResults = searchHelper.search(q, allProducts);
    searchResults = sortingHelper.applyDefaultsSorting(searchResults);

    res.render('search/search', {
        products: searchResults,
        queryString: q,
        sortingOptions
    });
});

router.get('/ajax', (req, res) => {
    const { q, sortId } = req.query;
    const products = productHelper.getProducts();
    let searchResults = searchHelper.search(q, products);
    searchResults = sortingHelper.getSortedProducts(sortId, searchResults);

    res.render('search/productGrid', {
        products: searchResults
    });
});

module.exports = router;
