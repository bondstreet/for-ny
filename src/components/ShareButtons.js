
import React from 'react'
import querystring from 'querystring'

const ShareButtons = (props, { data }) => {
    const fb = {
        link: 'https://www.facebook.com/sharer/sharer.php?',
        data: {
            u:     props.url,
            src:   'sdkpreparse'
        }
    }

    const twitter = {
        link: 'https://twitter.com/home?',
        data: {
            status: props.tweetText
                ? (props.tweetText + ' ' + props.url + ' #ForNewYork')
                : (data.social.defaultTweet)
        }
    }

    return (
        <div>
            <div className='fb-share-button'
                data-href={props.url}
                data-layout='button_count'
                data-mobile-iframe='true'>
                <a className='fb-xfbml-parse-ignore'
                    href={fb.link + querystring.stringify(fb.data)}
                    target='_blank'>Share</a>
            </div>
            <a className="twitter-share-button"
                data-text={props.tweetText}
                data-hashtags='ForNewYork'
                href={props.url}>Tweet</a>
        </div>
    )
}

ShareButtons.propTypes = {
    url: React.PropTypes.string,
    tweetText: React.PropTypes.string
}

ShareButtons.contextTypes = {
    data: React.PropTypes.object
}

export default ShareButtons

