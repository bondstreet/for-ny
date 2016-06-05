
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const marked = require('marked')
const events = require('./data/events.json')
const landing = require('./data/landing.json')
const footer = require('./data/footer.json')

const domain = 'http://bondstreet.com'
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
        const html = marked(matter.body)
        return Object.assign({
            name,
            markdown,
            html
        }, matter.attributes)
    })

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    domain,
    baseurl,
    title: 'For NYC',
    paths,
    posts,
    events,
    landing,
    footer
}

module.exports = data

