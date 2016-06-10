
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import FollowButtons from './FollowButtons'
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
                <Heading
                    small
                    className='mb2'
                    children={socialPromo.heading} />
                <FollowButtons />
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

