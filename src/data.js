
var fs = require('fs')
var path = require('path')
var frontMatter = require('front-matter')
var marked = require('marked')

var paths = [
  '/',
  '/about',
  '/posts'
]

var posts = fs.readdirSync(path.join(__dirname, '..', 'posts'))
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
  title: 'For NYC',
  paths,
  posts
}

module.exports = data

