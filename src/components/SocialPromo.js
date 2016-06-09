
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import ShareButtons from './ShareButtons'
import Circle from './Circle'

const SocialPromo = (props, { data }) => {
    const {
        landing: {
            socialPromo
        }
    } = data

    return (
        <section
            className='center'>
            <Circle className='bg-green peach'>
                <h3 className='h2 mb2'>
                    {socialPromo.heading}
                </h3>
                <ShareButtons
                    url={data.domain + data.baseurl}
                    title='For New York'
                    tweetText={socialPromo.tweetText}
                />
                <p className='bold px3 mt1'>
                    #ForNewYork
                </p>
            </Circle>
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

