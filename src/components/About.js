
import React from 'react'

const About = (props, { data }) => {
  return (
    <div>
      <h2>About</h2>
      <pre>Data: {JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

About.contextTypes = {
  data: React.PropTypes.object
}

export default About

