
const marked = require('marked')

const renderer = new marked.Renderer()

renderer.paragraph = (text) => {
    if (/^\<img/.test(text)) {
        return text
    } else {
        return `<p>${text}</p>`
    }
}

module.exports = renderer

