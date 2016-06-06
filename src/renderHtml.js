
// Renders the static HTML wrapper that the react app is injected into

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import css from './css/index.css'

let script = '/bundle.js'

if (process.env.NODE_ENV === 'development') {
    script = '/dev.js'
}

const Head = ({ title, metadata, post, ...props }) => {
    const ogTitle = post.title || metadata.title
    const ogImage = post.image || metadata.image
    const ogUrl = props.domain + props.baseurl + props.path
    const ogDescription = post.facebookBlurb || metadata.description

    return (
        <head>
            <meta charSet='utf-8' />
            <title>{title}</title>
            <meta property='og:title' content={ogTitle} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={ogUrl} />
            <meta property='og:image' content={ogImage} />
            <meta property='og:description' content={ogDescription} />
            <style dangerouslySetInnerHTML={{ __html: css }}/>
            <script src='https://use.typekit.net/zzi1igz.js' />
            <script dangerouslySetInnerHTML={{
                __html: 'try{Typekit.load({ async: true });}catch(e){}'
            }} />
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

