
import React from 'react'
import Heading from './Heading'
import ShareButtons from './ShareButtons'

const SocialPromo = (props, { data }) => {
    const {
        landing: {
            socialPromo
        }
    } = data

    return (
        <section className='px3 py2 bg-orange'>
            <Heading
                children={socialPromo.heading} />
            <ShareButtons
                url={data.domain + data.baseurl}
                title='For New York'
                tweetText={socialPromo.tweetText}
            />
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

