
import React from 'react'
import Link from './Link'
import NavItem from './NavItem'
import Heading from './Heading'
import Icon from './Icon'

const PostNav = ({ current }, { data }) => {
    const { posts } = data
    const previousPost = posts[current - 1] || false
    const nextPost = posts[current + 1] || false

    return (
        <nav className='px2 py2 border-bottom'>
            <div className='inline-block col-4'>
                <Icon to='/'
                    name='close'
                    title='Close article' />
            </div>
            <div className='inline-block col-4 center'>
                <Heading
                    className='inline-block'
                    level={1}
                    size={4}>
                    <Link to='/' className='color-inherit text-decoration-none'>
                        For New York
                    </Link>
                </Heading>
            </div>
            <div className='inline-block col-4 right-align'>
                <NavItem
                    disabled={!previousPost}
                    to={`/posts/${previousPost.name}`}>
                    <Icon name='chevronLeft' />
                    Previous
                </NavItem>
                <NavItem
                    disabled={!nextPost}
                    to={`/posts/${nextPost.name}`}>
                    Next
                    <Icon name='chevronRight' />
                </NavItem>
            </div>
        </nav>
    )
}

PostNav.contextTypes = {
    data: React.PropTypes.object
}

export default PostNav

