
import React from 'react'
import { Heading } from 'rebass'
import ShareButtons from './ShareButtons'

const SocialPromo = (props, { data }) => {
    const {
        landing: {
            socialPromo
        }
    } = data

    return (
        <section className='center px3 py3 bg-orange'>
            <Heading
                mb={2}
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

