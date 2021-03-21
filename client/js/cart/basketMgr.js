/* eslint-disable no-param-reassign */
const json = require('../utils/json');

function getOrCreateBasket() {
    const basket = localStorage.getItem('basket');

    if (basket) {
        return json.parse(basket, {});
    }

    return {};
}

function putProductToBasket(pid, basket) {
    const productKey = `pid_${pid}`;
    const alreadyInBasket = basket[productKey];

    if (alreadyInBasket) {
        const { quantity } = alreadyInBasket;
        if (typeof quantity === 'number') {
            alreadyInBasket.quantity = quantity + 1;
        } else {
            alreadyInBasket.quantity = 1;
        }
        basket[productKey] = alreadyInBasket;
    } else {
        basket[productKey] = {
            id: pid,
            quantity: 1
        };
    }
}

function saveBasket(basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
}

function addProduct(pid) {
    const basket = getOrCreateBasket();

    putProductToBasket(pid, basket);

    saveBasket(basket);
}

function getTotalQuantity() {
    const basket = getOrCreateBasket();
    let quantity = 0;

    Object.keys(basket).forEach((key) => {
        const item = basket[key];
        if (item && item.quantity) {
            quantity += item.quantity;
        }
    });

    return quantity;
}

module.exports = {
    addProduct,
    getTotalQuantity,
    getOrCreateBasket
};
