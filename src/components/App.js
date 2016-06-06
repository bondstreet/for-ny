
import React from 'react'
import rebassConfig from './rebass-config'

class App extends React.Component {
    getChildContext () {
        return {
            rebass: rebassConfig
        }
    }

    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

App.childContextTypes = {
    rebass: React.PropTypes.object
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App

