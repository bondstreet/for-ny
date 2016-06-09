
import React from 'react'

const FollowButtons = (props, { data }) => {
    return (
        <div>
            <div className='fb-follow'
                data-href='https://www.facebook.com/onbondstreet'
                data-layout='button_count'
                data-show-faces='false'></div>
            <a className='twitter-follow-button'
                data-show-count='false'
                href='https://twitter.com/onbondstreet'>Follow @onbondstreet</a>
        </div>
    )
}

FollowButtons.contextTypes = {
    data: React.PropTypes.object
}

export default FollowButtons

