
import React from 'react'
import Nav from './Nav'

//  1.  I haven't seen a global nav in the wireframes,
//      but keeping this in for development

const App = (props, { data }) => {
    return (
        <div>
            {props.children}
            <Nav /> {/* 1 */}
        </div>
    )
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App

