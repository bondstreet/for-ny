
import React from 'react'

class FacebookShareButton extends React.Component {
    constructor () {
        super()
        this.refresh = this.refresh.bind(this)
        this.createDiv = this.createDiv.bind(this)
    }

    componentDidMount () {
        this.createDiv()
        this.refresh()
    }

    componentDidUpdate () {
        if (!this.props.isNav) {
            this.createDiv()
            this.refresh()
        }
    }

    refresh () {
        if (typeof FB !== 'undefined') {
            FB.XFBML.parse()
        }
    }

    createDiv () {
        const { url } = this.props
        this.refs.root.innerHTML = null
        const div = document.createElement('div')
        div.className = 'fb-share-button'
        div.setAttribute('data-href', url)
        div.setAttribute('data-layout', 'button_count')
        div.setAttribute('data-mobile-iframe', true)
        this.refs.root.appendChild(div)
    }

    render () {
        const sx = {
            display: 'inline-block',
            margin: '0 10px'
        }

        return <div ref='root' style={sx} />
    }
}

export default FacebookShareButton

