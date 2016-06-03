
// Renders the static HTML wrapper that the react app is injected into

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import css from './css/index.css'
import basscss from 'basscss/css/basscss.min.css'

let script = '/bundle.js'

if (process.env.NODE_ENV === 'development') {
    script = '/dev.js'
}

const Head = ({ title }) => {
  return (
    <head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      {/* OG meta tags etc. goes here */}
      <style dangerouslySetInnerHTML={{ __html: css }}/>
      <style dangerouslySetInnerHTML={{ __html: basscss }}/>
    </head>
  )
}

const Html = ({ app, ...props }) => (
    <html>
        <Head {...props} />
        <body>
            <div id='app'
                dangerouslySetInnerHTML={{
                    __html: app
                }} />
            <script id='data'
                type='application/json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(props)
                }} />
            <script src={props.baseurl + script} />
        </body>
    </html>
)

const renderHtml = (props) => {
    const html = ReactDOMServer.renderToStaticMarkup(
        <Html {...props} />
    )

    return `<!DOCTYPE html>${html}`
}

export default renderHtml
