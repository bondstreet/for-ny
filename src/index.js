
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, Router, browserHistory } from 'react-router'
import routes from './routes'
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
    document
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

    callback(null, `<!DOCTYPE html>${app}`)

    const html = `
      <!DOCTYPE html>
      <html>
        <div id='app'>${app}</div>
        <script id='data' type='application/json'>${JSON.stringify(props)}</script>
        <script src='/index.js'></script>
      </html>
    `

    // callback(null, html)
  })
}

export default render

