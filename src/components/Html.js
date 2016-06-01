
import React from 'react'
import Head from './Head'
import Nav from './Nav'

class Html extends React.Component {
  render () {
    const { data } = this.context
    return (
      <html>
        <Head />
        <body>
          <Nav />
          {this.props.children}
          <script id='data'
            type='application/json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
          <script src='/index.js' />
        </body>
      </html>
    )
  }
}

Html.contextTypes = {
  data: React.PropTypes.object
}

export default Html

