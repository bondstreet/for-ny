
import React from 'react'
import querystring from 'querystring'

class FacebookShareButton extends React.Component {
    componentDidMount () {
        if (typeof FB !== 'undefined') {
            FB.XFBML.parse()
        }
    }

    render () {
        const { url } = this.props

        const link = 'https://www.facebook.com/sharer/sharer.php?'
            + querystring.stringify({
                u: url,
                src: 'sdkpreparse'
            })

        return (
            <div ref='root'
                className='fb-share-button'
                data-href={url}
                data-layout='button_count'
                data-mobile-iframe='true' />
        )
    }
}

export default FacebookShareButton

