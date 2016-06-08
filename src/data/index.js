
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const marked = require('marked')
const renderer = require('../marked-renderer')

const metadata = require('./metadata.json')
const landing = require('./landing.json')
const events = require('./events.json')
const footer = require('./footer.json')
const leadForm = require('./lead-form.json')

const domain = 'https://bondstreet.com'
const baseurl = '/fornewyork'

const paths = [
    '/',
    '/posts'
]

const posts = fs.readdirSync(path.join(__dirname, '..', '..', 'posts'))
    .filter(f => /\.md$/.test(f))
    .map(f => {
        const name = f.replace(/\.md$/, '')
        // This could be done with markdown-loader for HMR
        const markdown = fs.readFileSync(path.join(__dirname, '..', '..', 'posts', f), 'utf8')
        const matter = frontMatter(markdown)
        const html = marked(matter.body, { renderer })
        return Object.assign({
            name,
            markdown,
            html
        }, matter.attributes)
    })
    .sort((a, b) => a.date < b.date)

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    domain,
    baseurl,
    title: 'For New York',
    metadata,
    paths,
    posts,
    landing,
    events,
    footer,
    leadForm
}

module.exports = data

