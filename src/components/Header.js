
import React from 'react'

const Header = (props, { data }) => {
  const sx = {
    root: {
      minHeight: '80vh'
    }
  }

  return (
    <header className='center px3 py4 bg-gray'
      style={sx.root}>
      <h1>{data.title}</h1>
    </header>
  )
}

Header.contextTypes = {
  data: React.PropTypes.object
}

export default Header

