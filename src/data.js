
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const marked = require('marked')
const renderer = require('./marked-renderer')
const landing = require('./data/landing.json')
const footer = require('./data/footer.json')

const baseurl = '/for-ny'

const paths = [
    '/',
    '/posts'
]

const posts = fs.readdirSync(path.join(__dirname, '..', 'posts'))
    .filter(f => /\.md$/.test(f))
    .map(f => {
        const name = f.replace(/\.md$/, '')
        // This could be done with markdown-loader for HMR
        const markdown = fs.readFileSync(path.join(__dirname, '..', 'posts', f), 'utf8')
        const matter = frontMatter(markdown)
        const html = marked(matter.body, { renderer })
        return Object.assign({
            name,
            markdown,
            html
        }, matter.attributes)
    })
    .sort((a, b) => {
        return a.date < b.date
    })

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    hostname: '//bondstreet.com/for-new-york',
    baseurl,
    title: 'For NYC',
    paths,
    posts,
    landing,
    footer
}

module.exports = data

