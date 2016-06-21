
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import NavItem from './NavItem'
import Logo from './Logo'
import Heading from './Heading'

const PostNav = ({ previousPost, nextPost }) => {
    const cx = {
        root: classnames(
            'PostNav',
            'md-fixed',
            'top-0 right-0 left-0 z2',
            'table',
            'col-12',
            'p2',
            'bg-mint'
        )
    }
    return (
        <nav className={cx.root}>
            <div className='table-cell align-middle col-4'>
                <NavItem to='/posts'
                    icon='close'>
                    Close
                </NavItem>
            </div>
            <div className='table-cell align-middle center col-4'>
                <Logo to='/' />
            </div>
            <div className='table-cell align-middle right-align col-4'>
                <div className='table col-12 xs-hide sm-hide'>
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

