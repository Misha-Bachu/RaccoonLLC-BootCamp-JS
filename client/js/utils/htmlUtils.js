function createHTMLElementFromString(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
}

function clearNode(node) {
    // eslint-disable-next-line no-param-reassign
    node.innerHTML = '';
}

function loadScript(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = cb;

    document.head.appendChild(script);
}

module.exports = {
    createHTMLElementFromString,
    clearNode,
    loadScript
};
