
import React from 'react'
import Nav from './Nav'

const App = (props, { data }) => {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App

