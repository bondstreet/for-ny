
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { match } from 'react-router'
import routes from './routes'
import Html from './Html'
import Root from './components/Root'

if (typeof document !== 'undefined') {
	const div = document.getElementById('app')
	const initialData = JSON.parse(document.getElementById('data').innerHTML)
	ReactDOM.render(<Root data={initialData} />, div)
}

const render = ({
	webpackStats,
	assets,
	...props
}, callback) => {
	match({ routes, location: props.path }, (err, redirectLocation, renderProps) => {
		const app = ReactDOMServer.renderToString(
            <Root data={props} renderProps={renderProps} />
		)

		const html = Html({ app, ...props })

		callback(null, `<!DOCTYPE html>${html}`)
	})
}

export default render

