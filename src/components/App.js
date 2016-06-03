
import React from 'react'

const App = (props, { data }) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App

