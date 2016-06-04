
const marked = require('marked')

const renderer = new marked.Renderer()

// renderer.image = (href, title, text) => {
//     console.log('image render', href, title, text)
//     return `<img src='${href}' />`
// }

renderer.paragraph = (text) => {
    if (/^\<img/.test(text)) {
        return text
    } else {
        return `<p>${text}</p>`
    }
}

module.exports = renderer

