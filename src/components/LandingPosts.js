
import React from 'react'
import Scroll from 'react-scroll'
import { Container } from 'rebass'
import PostList from './PostList'
import Heading from './Heading'

const LandingPosts = (props, { data }) => {
    const { postList } = data.landing

    return (
        <Scroll.Element name='stories' id='stories'
            className='px2 py4 bg-peach'>
            <Container style={{ maxWidth: 1280 }}>
                <Heading
                    center
                    mega
                    caps
                    className='mb3'
                    children={postList.heading} />
                <PostList />
            </Container>
        </Scroll.Element>
    )
}

LandingPosts.contextTypes = {
    data: React.PropTypes.object
}

export default LandingPosts

