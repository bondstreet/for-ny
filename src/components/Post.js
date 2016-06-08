
import React from 'react'
import { findIndex } from 'lodash'
import sanitize from 'sanitize-html'
import { Container } from 'rebass'
import Heading from './Heading'
import Text from './Text'
import ShareButtons from './ShareButtons'
import PostNav from './PostNav'
import PostCard from './PostCard'
import Prose from './Prose'
import NavItem from './NavItem'
import Footer from './Footer'
import Circle from './Circle'

const Post = ({ params }, { data, router }) => {
    const { posts } = data
    const index = findIndex(posts, p => p.name === params.name)
    const post = posts[index]
    const previousPost = posts[index - 1] || false
    const nextPost = posts[index + 1] || false
    const description = sanitize(post.description)

    return (
        <div className='bg-mint'>
            <PostNav previousPost={previousPost}
                nextPost={nextPost} />
            <div className='center py4'>
                <Heading size={0}>{post.title}</Heading>
                <Text size={3}
                    dangerouslySetInnerHTML={{
                        __html: description
                    }} />
            </div>
            {post.image && (
                <Container style={{ maxWidth: 1280 }}>
                    <img src={data.baseurl + post.image} className='fit col-12 mb3' />
                </Container>
            )}
            <Container px={3} style={{ maxWidth: 768 }}>
                <Heading size={1} center className='py4'>
                    What are 3 of your favorite small businesses in New York?
                </Heading>
            </Container>
            <Container style={{ maxWidth: 1024 }} px={3} py={4}>
                <Prose html={post.html} />
                <div className='sm-col-6 mx-auto'>
                    <Circle className='bg-green mint'>
                        <Text className='mb2'>
                            Share this
                        </Text>
                        <ShareButtons
                            url={data.domain + data.baseurl + data.path}
                            title={post.title}
                            tweetText={post.tweetText}
                        />
                        <Text className='mt2'>
                            #ForNewYork
                        </Text>
                    </Circle>
                </div>
            </Container>
            <div className='py4 bg-peach'>
                <Container>
                    <Heading size={1} center>Up Next</Heading>
                    <div className='center mxn2 py4'>
                        {previousPost && (
                            <div className='inline-block align-top col-6 px2'>
                                <PostCard {...previousPost} />
                            </div>
                        )}
                        {nextPost && (
                            <div className='inline-block align-top col-6 px2'>
                                <PostCard {...nextPost} />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

Post.contextTypes = {
    data: React.PropTypes.object,
    router: React.PropTypes.object
}

export default Post

