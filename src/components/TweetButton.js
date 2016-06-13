
import React from 'react'
import { twitter } from '../social'

class TweetButton extends React.Component {
    constructor () {
        super()
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount () {
        this.createLink.bind(this)()
        this.refresh()
    }

    componentDidUpdate () {
        this.refresh()
    }

    refresh () {
        if (typeof twttr !== 'undefined') {
            // console.log('update tweet button', this.refs.root, this.refs.link)
            // console.log(Object.keys(twttr.widgets))
            twttr.widgets.load(this.refs.root)
        }
    }

    createLink () {
        const { url, text, hashtags } = this.props
        const link = document.createElement('a')
        link.href = url
        link.textContent = 'Tweet'
        link.className = 'twitter-share-button'
        link.setAttribute('data-hashtags', hashtags)
        link.setAttribute('data-text', text)
        this.refs.root.appendChild(link)
    }

    render () {
        const { url, text, hashtags } = this.props
        const { defaultTweet } = this.context.data.social

        const sx = {
            display: 'inline-block'
        }

        return (
            <div ref='root' style={sx}>
                {/*
                <a ref='link'
                    className='twitter-share-button'
                    data-hashtags={hashtags}
                    data-text={text || defaultTweet}
                    href={url}>
                    Tweet
                </a>
              */}
            </div>
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
