
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
            <script type="text/ja">
                var om574ef1a5731c1,om574ef1a5731c1_poll=function(){var r=0;return function(n,l){clearInterval(r),r=setInterval(n,l)}}();!function(e,t,n){if(e.getElementById(n)){om574ef1a5731c1_poll(function(){if(window['om_loaded']){if(!om574ef1a5731c1){om574ef1a5731c1=new OptinMonsterApp();return om574ef1a5731c1.init({"s":"19406.574ef1a5731c1","staging":0,"dev":0,"beta":0});}}},25);return;}var d=false,o=e.createElement(t);o.id=n,o.src="//a.optnmnstr.com/app/js/api.min.js",o.onload=o.onreadystatechange=function(){if(!d){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){try{d=om_loaded=true;om574ef1a5731c1=new OptinMonsterApp();om574ef1a5731c1.init({"s":"19406.574ef1a5731c1","staging":0,"dev":0,"beta":0});o.onload=o.onreadystatechange=null;}catch(t){}}}};(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o)}(document,"script","omapi-script");
            </script>
            <script src={script} />
            <script src="/optinmonster.js"></script>
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

