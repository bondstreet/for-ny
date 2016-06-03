
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
        <section id='stories'>
            <Heading size={0} children={postList.heading} />
            <PostList />
        </section>
    )
}

LandingPosts.contextTypes = {
    data: React.PropTypes.object
}

export default LandingPosts

