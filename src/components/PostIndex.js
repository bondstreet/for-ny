
import React from 'react'
import {
    Container,
} from 'rebass'
import PostList from './PostList'
import Logo from './Logo'
import NavItem from './NavItem'
import Heading from './Heading'
import Footer from './Footer'

class PostIndex extends React.Component {
    render () {
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
                    children='Stories' />
                <Container style={{ maxWidth: 1280 }}>
                    <PostList />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default PostIndex

