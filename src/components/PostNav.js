
import React from 'react'
import Link from './Link'

const PostNav = ({ current }, { data }) => {
    const { posts } = data
    const previousPost = posts[current - 1] || false
    const nextPost = posts[current + 1] || false

    return (
        <nav>
            <Link to='/' children='Home' />
            <h1>For New York</h1>
            <Link to={`/posts/${previousPost.name}`}>
                Previous
            </Link>
            <Link to={`/posts/${nextPost.name}`}>
                Next
            </Link>
        </nav>
    )
}

PostNav.contextTypes = {
    data: React.PropTypes.object
}

export default PostNav

