'use strict'

function createElementFromHTML(htmlString) {
    var div = document.createElement('div')
    div.innerHTML = htmlString.trim()

    return div.firstChild
}

function clearNode(node) {
    node.innerHTML = ''
}

module.exports = {
    createElementFromHTML,
    clearNode
}
