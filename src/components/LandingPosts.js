
import React from 'react'
import Scroll from 'react-scroll'
import PostList from './PostList'
import Heading from './Heading'

const LandingPosts = (props, {
    data: {
        landing: {
            postList
        }
    }
}) => {
    return (
        <Scroll.Element name='stories' id='stories'
            className='px3 py4'>
            <Heading center
                caps
                size={0}
                className='mb3'
                children={postList.heading} />
            <PostList />
        </Scroll.Element>
    )
}

LandingPosts.contextTypes = {
    data: React.PropTypes.object
}

export default LandingPosts

