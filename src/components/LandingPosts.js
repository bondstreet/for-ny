
import React from 'react'
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
        <section id='stories'
            className='px3 py4'>
            <Heading center
                caps
                size={0}
                className='mb3'
                children={postList.heading} />
            <PostList />
        </section>
    )
}

LandingPosts.contextTypes = {
    data: React.PropTypes.object
}

export default LandingPosts

