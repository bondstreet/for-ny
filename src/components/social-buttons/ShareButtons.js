
import React from 'react'
import querystring from 'querystring'
import TweetButton from './TweetButton'
import FacebookShareButton from './FacebookShareButton'

const ShareButtons = ({ url, text }) => {
    return (
        <div>
            <FacebookShareButton
                url={url} />
            <TweetButton
                text={text}
                url={url} />
        </div>
    )
}

ShareButtons.propTypes = {
    url: React.PropTypes.string,
    tweetText: React.PropTypes.string
}

export default ShareButtons

