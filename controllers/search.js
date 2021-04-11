const Router = require('express');

const router = Router();

const searchValidation = require('../middleware/searchValidation');

const searchHelpers = require('../scripts/helpers/searchHelpers');
const sortingHelpers = require('../scripts/helpers/sortingHelpers');
const productHelpers = require('../scripts/helpers/productHelpers');

router.get('/show',
    searchValidation.emptyField,
    (req, res) => {
        const { q } = req.query;

        const allProducts = productHelpers.getProducts();
        let sortingOptions = sortingHelpers.getSortingOptions();

        sortingOptions = sortingHelpers.addSearchURl('/search/ajax', q, sortingOptions);
        let searchResults = searchHelpers.search(q, allProducts);
        searchResults = sortingHelpers.applyDefaultsSorting(searchResults);

        res.render('search/search', {
            products: searchResults,
            queryString: q,
            sortingOptions
        });
    });

router.get('/ajax', (req, res) => {
    const { q, sortId } = req.query;

    const products = productHelpers.getProducts();
    let searchResults = searchHelpers.search(q, products);
    searchResults = sortingHelpers.getSortedProducts(sortId, searchResults);

    res.render('search/productGrid', {
        products: searchResults
    });
});

router.get('/library', (req, res) => {
    const products = productHelpers.getProducts();

    res.render('search/library', {
        products
    });
});

module.exports = router;
