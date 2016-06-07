
import React from 'react'
import querystring from 'querystring'
import { ButtonOutline } from 'rebass'

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
        <div>
            <ButtonOutline
                m={1}
                href={fb.link + querystring.stringify(fb.data)}>
                Facebook
            </ButtonOutline>
            <ButtonOutline
                m={1}
                href={twitter.link + querystring.stringify(twitter.data)}>
                Twitter
            </ButtonOutline>
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

