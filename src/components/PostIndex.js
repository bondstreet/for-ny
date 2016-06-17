
import React from 'react'
import {
    Container,
} from 'rebass'
import PostList from './PostList'
import Logo from './Logo'
import NavItem from './NavItem'
import Heading from './Heading'
import Text from './Text'
import Footer from './Footer'


const PostIndex = (props, { data }) => {
    const {
        heading,
        text
    } = data.landing.postList

    return (
        <div className='bg-peach'>
            <header className='table col-12 p2'>
                <div className='table-cell align-middle col-4'>
                    <NavItem to='/#stories'
                        icon='close'>
                        Close
                    </NavItem>
                </div>
                <div className='table-cell align-middle center col-4'>
                    <Logo to='/' />
                </div>
                <div className='table-cell align-middle col-4' />
            </header>
            <Heading
                level={1}
                center
                mega
                caps
                className='mb3'
                children={heading} />
            <Container style={{ maxWidth: 1280 }}>
                {text && (
                    <Text children={text} className='mb4' />
                )}
                <PostList />
            </Container>
            <Footer />
        </div>
    )
}

PostIndex.contextTypes = {
    data: React.PropTypes.object
}

export default PostIndex

