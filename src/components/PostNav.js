
import React from 'react'
import Link from './Link'
import NavItem from './NavItem'
import Logo from './Logo'
import Heading from './Heading'

const PostNav = ({ previousPost, nextPost }) => {
    const sx = {
        root: {
            tableLayout: 'fixed'
        }
    }
    return (
        <nav className='table col-12 px2 py2' style={sx.root}>
            <div className='table-cell '>
                <NavItem to='/#stories'
                    icon='close'>
                    Close
                </NavItem>
            </div>
            <div className='table-cell center'>
                <Logo to='/' />
            </div>
            <div className='xs-hide sm-hide table-cell right-align'>
                <div className='table col-12'>
                    <NavItem
                        icon='chevronLeft'
                        disabled={!previousPost}
                        to={`/posts/${previousPost.name}`}>
                        Previous
                    </NavItem>
                    <NavItem
                        icon='chevronRight'
                        right
                        disabled={!nextPost}
                        to={`/posts/${nextPost.name}`}>
                        Next
                    </NavItem>
                </div>
            </div>
        </nav>
    )
}

export default PostNav

