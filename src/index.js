
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { match } from 'react-router'
import { find } from 'lodash'
import routes from './routes'
import renderHtml from './renderHtml'
import Root from './components/Root'

if (typeof document !== 'undefined') {
	const div = document.getElementById('app')
	const initialData = JSON.parse(document.getElementById('data').innerHTML)
	ReactDOM.render(<Root data={initialData} />, div)
}

const getCurrentPost = (posts, path) => {
    if (!/^\/posts\//.test(path)) {
        return false
    }
    const id = path.replace(/^\/posts\/|index\.html$/, '')
    if (id) {
        const post = find(posts, p => p.name === id)
        console.log(path, post)
        return post
    }
}

const render = ({
	webpackStats,
	assets,
	...props
}, callback) => {
    const post = getCurrentPost(props.posts, props.path)

	match({ routes, location: props.baseurl + props.path }, (err, redirectLocation, renderProps) => {
		const app = ReactDOMServer.renderToString(
            <Root data={props} renderProps={renderProps} />
		)

		const html = renderHtml({ app, post, ...props })

		callback(null, `<!DOCTYPE html>${html}`)
	})
}

export default render

