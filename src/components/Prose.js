
import React from 'react'

class Prose extends React.Component {
    componentDidMount () {
        require('style!../css/rasmus.css')
    }

    render () {
        const { html } = this.props
        return (
            <div
                className='Prose'
                dangerouslySetInnerHTML={{ __html: html }} />
        )
    }
}

export default Prose

