function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
}

function clearNode(node) {
    // eslint-disable-next-line no-param-reassign
    node.innerHTML = '';
}

module.exports = {
    createElementFromHTML,
    clearNode
};
