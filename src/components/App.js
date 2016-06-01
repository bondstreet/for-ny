
import React from 'react'
import Nav from './Nav'

const App = (props, { data }) => {
  return (
    <div>
      <h1>App</h1>
      <Nav />
      {props.children}
    </div>
  )
}

App.contextTypes = {
  data: React.PropTypes.object
}

export default App

