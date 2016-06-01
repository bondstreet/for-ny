
import React from 'react'
import css from '../css/index.css'
import basscss from 'basscss/css/basscss.min.css'

const Head = (props, { data }) => {
  return (
    <head>
      <meta charSet='utf-8' />
      <title>{data.title}</title>
      {/* OG meta tags etc. goes here */}
      <style dangerouslySetInnerHTML={{ __html: css }}/>
      <style dangerouslySetInnerHTML={{ __html: basscss }}/>
    </head>
  )
}

Head.contextTypes = {
  data: React.PropTypes.object
}

export default Head

