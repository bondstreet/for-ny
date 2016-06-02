
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, Router, browserHistory } from 'react-router'
import routes from './routes'
import Html from './Html'
import Provider from './components/Provider'

if (typeof document !== 'undefined') {
	const div = document.getElementById('app')
	const initialData = JSON.parse(document.getElementById('data').innerHTML)
	ReactDOM.render(
		<Provider data={initialData}>
			<Router
				history={browserHistory}
				routes={routes} />
		</Provider>,
		div
	)
}

const render = ({
	webpackStats,
	assets,
	...props
}, callback) => {
	match({ routes, location: props.path }, (err, redirectLocation, renderProps) => {
		const app = ReactDOMServer.renderToString(
			<Provider data={props}>
				<RouterContext {...renderProps} />
			</Provider>
		)

		const html = Html({ app, ...props })

		callback(null, `<!DOCTYPE html>${html}`)
	})
}

export default render

