
import React from 'react'

const LikeButton = (props, { data }) => {
    return (
        <div className='fb-like'
            data-href='https://bondstreet.com/fornewyork'
            data-layout='button_count'
            data-action='like'
            data-show-faces='false'
            data-share='false'></div>
    )
}

LikeButton.contextTypes = {
    data: React.PropTypes.object
}

export default LikeButton

