
import React from 'react'
import { twitter } from '../social'

class TweetButton extends React.Component {
    constructor () {
        super()
        this.refresh = this.refresh.bind(this)
        this.createLink = this.createLink.bind(this)
    }

    componentDidMount () {
        this.createLink()
        this.refresh()
    }

    componentDidUpdate () {
        this.createLink()
        this.refresh()
    }

    refresh () {
        if (typeof twttr !== 'undefined') {
            twttr.widgets.load(this.refs.root)
        }
    }

    createLink () {
        const { url, text, hashtags } = this.props
        const { defaultTweet } = this.context.data.social
        this.refs.root.innerHTML = null
        const link = document.createElement('a')
        link.href = url
        link.className = 'twitter-share-button'
        link.setAttribute('data-hashtags', hashtags)
        link.setAttribute('data-text', text || defaultTweet)
        this.refs.root.appendChild(link)
    }

    render () {
        const sx = {
            display: 'inline-block',
            minHeight: 27
        }

        return (
            <div ref='root' style={sx} />
        )
    }
}

TweetButton.contextTypes = {
    data: React.PropTypes.object
}

TweetButton.defaultProps = {
    hashtags: 'ForNewYork'
}

export default TweetButton
