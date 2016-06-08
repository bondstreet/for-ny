
// Renders the static HTML wrapper that the react app is injected into

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import css from './css/index.css'
import { gtmScript } from './tracking'

let script = '/bundle.js'

if (process.env.NODE_ENV === 'development') {
    script = '/dev.js'
}

const Head = ({ title, metadata, post, ...props }) => {
    const metaTitle = post.title || metadata.title
    const metaImage = (post.image) ? props.domain + props.baseurl + post.image : metadata.image
    const metaUrl = props.domain + props.baseurl + props.path
    const metaDescription = post.socialBlurb || metadata.description

    return (
        <head>
            <meta charSet='utf-8' />
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta property='og:title' content={metaTitle} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={metaUrl} />
            <meta property='og:image' content={metaImage} />
            <meta property='og:description' content={metaDescription} />
            <meta property='fb:app_id' content='158471404493763' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@onbondstreet' />
            <meta name='twitter:title' content={metaTitle} />
            <meta name='twitter:description' content={metaDescription} />
            <meta name='twitter:image' content={metaImage} />
            <style dangerouslySetInnerHTML={{ __html: css }}/>
            <script src='https://cdn.optimizely.com/js/6134185353.js'></script>
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
            <script
                dangerouslySetInnerHTML={{
                    __html: gtmScript
                }} />
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

