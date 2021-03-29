function parse(obj, defaultValue) {
    try {
        return JSON.parse(obj);
    } catch (e) {
        return defaultValue;
    }
}

module.exports = {
    parse
};
