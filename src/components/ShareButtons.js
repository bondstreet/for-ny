
import React from 'react'
import querystring from 'querystring'

const ShareButtons = (props, { data }) => {
    const fb = {
        link: 'http://www.facebook.com/share.php?',
        data: {
            u:     props.url,
            title: props.title
        }
    }

    const twitter = {
        link: 'https://twitter.com/home?',
        data: {
            status: props.tweetText + ' ' + props.url
        }
    }

    return (
        <div className="shareButtons">
            <a className="facebook" href={fb.link + querystring.stringify(fb.data)}>Share on Facebook</a>
            <a className="twitter" href={twitter.link + querystring.stringify(twitter.data)}>Share on Twitter</a>
        </div>
    )
}

ShareButtons.propTypes = {
    url: React.PropTypes.string,
    title: React.PropTypes.string,    // for facebook
    tweetText: React.PropTypes.string // for twitter
}

ShareButtons.contextTypes = {
    data: React.PropTypes.object
}

export default ShareButtons

