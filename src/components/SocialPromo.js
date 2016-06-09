
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import ShareButtons from './ShareButtons'
import Circle from './Circle'

const SocialPromo = (props, { data }) => {
    const {
        socialHeading,
        socialTweetText
    } = data.landing
    const {
        landing: {
            socialPromo
        }
    } = data

    return (
        <section
            className='center'>
            <Circle className='bg-green peach'>
                <Heading
                    small
                    className='mb2'
                    children={socialHeading} />
                <ShareButtons
                    url={data.domain + data.baseurl}
                    title='For New York'
                    tweetText={socialTweetText}
                />
                <Text className='mt2'>
                    #ForNewYork
                </Text>
            </Circle>
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

