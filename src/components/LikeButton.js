
import React from 'react'

class LikeButton extends React.Component {
    constructor () {
        super()
        this.refresh = this.refresh.bind(this)
        this.createDiv = this.createDiv.bind(this)
    }

    componentDidMount () {
        this.createDiv()
        this.refresh()
    }

    refresh () {
        if (typeof FB !== 'undefined') {
            FB.XFBML.parse()
        }
    }

    createDiv () {
        this.refs.root.innerHTML = null
        const div = document.createElement('div')
        div.className = 'fb-like'
        div.setAttribute('data-href', 'https://bondstreet.com/fornewyork')
        div.setAttribute('data-layout', 'button_count')
        div.setAttribute('data-action', 'like')
        div.setAttribute('data-show-faces', false)
        div.setAttribute('data-share', false)
        this.refs.root.appendChild(div)
    }

    render () {
        const sx = {
            display: 'inline-block'
        }

        return <div ref='root' style={sx} />
    }
}

export default LikeButton

