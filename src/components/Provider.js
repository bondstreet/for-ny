
// Provides data through React context

import React from 'react'

class Provider extends React.Component {
  getChildContext () {
    return {
      data: this.props.data
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}

Provider.childContextTypes = {
  data: React.PropTypes.object
}

export default Provider

