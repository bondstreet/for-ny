
import React from 'react'
import Scroll from 'react-scroll'
import {
    Container,
    ButtonOutline
} from 'rebass'
import Link from './Link'
import PostList from './PostList'
import Heading from './Heading'
import Text from './Text'

const LandingPosts = (props, { data }) => {
    const {
        heading,
        text
    } = data.landing.postList

    return (
        <Scroll.Element name='stories' id='stories'
            className='px2 py4 bg-peach'>
            <Container style={{ maxWidth: 1280 }}>
                <Heading
                    center
                    mega
                    caps
                    className='mb3'
                    children={heading} />
                {text && (
                    <Text children={text} className='mb4' />
                )}
                <PostList limit={7} />
                <div className='center'>
                    <ButtonOutline
                        is={Link}
                        to='/posts'
                        children='View more' />
                </div>
            </Container>
        </Scroll.Element>
    )
}

LandingPosts.contextTypes = {
    data: React.PropTypes.object
}

export default LandingPosts
