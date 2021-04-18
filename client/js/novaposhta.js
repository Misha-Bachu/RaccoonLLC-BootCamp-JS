const htmlUtils = require('./utils/htmlUtils');

let map;

function showMarker(coordinates, message) {
    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
    });

    const markerInfo = new google.maps.InfoWindow({
        content: message,
    });

    google.maps.event.addListener(marker, 'click', () => {
        markerInfo.open(map, marker);
    });

    return marker;
}

function showWarehouses() {
    const warehouses = document.querySelectorAll('.js-warehouse');

    warehouses.forEach(warehouse => {
        const lat = Number(warehouse.getAttribute('data-lat'));
        const lng = Number(warehouse.getAttribute('data-lng'));
        const title = warehouse.getAttribute('data-title');

        showMarker({ lat, lng }, title);
    });
}

function initMap() {
    const vinCoord = { lat: 49.2331, lng: 28.4682 };

    map = new google.maps.Map(document.querySelector('.js-map'), {
        center: vinCoord,
        zoom: 15
    });

    showWarehouses();
}

function init() {
    const googleMapElement = document.querySelector('.js-map');

    if (googleMapElement) {
        const googleKey = googleMapElement.getAttribute('data-key');

        htmlUtils.loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=&v=weekly`, initMap);
    }

    const reCaptchaElement = document.querySelector('.js-recaptcha');

    if (reCaptchaElement) {
        htmlUtils.loadScript('https://www.google.com/recaptcha/api.js');
    }
}

module.exports = {
    init
};
