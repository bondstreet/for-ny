
import React from 'react'
import Heading from './Heading'
import ShareButtons from './ShareButtons'

const SocialPromo = (props, {
    data: {
        landing: {
            socialPromo
        }
    }
}) => {
    return (
        <section className='px3 py2 bg-orange'>
            <Heading
                children={socialPromo.heading} />
            <ShareButtons
                url={data.domain + data.baseurl}
                title='For New York'
                tweetText='Twitter text goes here'
            />
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

