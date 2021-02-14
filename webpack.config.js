const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static/js/'),
    },
};