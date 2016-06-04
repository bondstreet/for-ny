
import React from 'react'
import { Heading } from 'rebass'
import ShareButtons from './ShareButtons'

const SocialPromo = (props, {
    data: {
        domain,
        baseurl,
        landing: {
            socialPromo
        }
    }
}) => {
    return (
        <section className='center px3 py3 bg-orange'>
            <Heading
                mb={2}
                children={socialPromo.heading} />
            <ShareButtons
                title='For New York'
                tweetText='For New York'
                url='For New York'
            />
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

