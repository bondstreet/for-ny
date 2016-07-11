
import React from 'react'
import classnames from 'classnames'

class Prose extends React.Component {
    componentDidMount () {
        require('style!../css/rasmus.css')
    }

    render () {
        const { html, staggered } = this.props
        const cx = classnames('Prose', {
            'Prose--staggered': staggered
        })

        return (
            <div
                className={cx}
                dangerouslySetInnerHTML={{ __html: html }} />
        )
    }
}

export default Prose

