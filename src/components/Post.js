
import React from 'react'
import { findIndex } from 'lodash'
import ShareButtons from './ShareButtons'
import PostNav from './PostNav'
import PostCard from './PostCard'
import Container from './Container'
import Prose from './Prose'
import Heading from './Heading'
import Text from './Text'
import NavItem from './NavItem'
import Footer from './Footer'

const Post = ({ params }, { data, router }) => {
    const { posts } = data
    const index = findIndex(posts, p => p.name === params.name)
    const post = posts[index]
    const previousPost = posts[index - 1] || false
    const nextPost = posts[index + 1] || false

    console.log(router)

    return (
        <div>
            <PostNav previousPost={previousPost}
                nextPost={nextPost} />
            <div className='py4'>
                <div className='h1 center mb4'>◆</div>
                <Heading size={0} center>{post.title}</Heading>
                <Text size={3} center>{post.description}</Text>
            </div>
            {post.image && (
                <Container maxWidth={1280}>
                    <img src={post.image} className='fit col-12 mb3' />
                </Container>
            )}
            <Container maxWidth={768}>
                <Heading size={1} center className='py4'>
                    What are 3 of your favorite small businesses in New York?
                </Heading>
            </Container>
            <Container maxWidth={1024} className='py4'>
                <Prose html={post.html} />
                <ShareButtons
                    url={'http://' + data.hostname + data.baseurl + data.path}
                    title={post.title}
                    tweetText={post.tweetText}
                />
                <pre className='my4 py4 bg-yellow'>FPO CTA</pre>
            </Container>
            <Container>
                <Heading size={1} center>Up Next</Heading>
                <div className='mxn2 py4'>
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
            <Footer />
        </div>
    )
}

Post.contextTypes = {
    data: React.PropTypes.object,
    router: React.PropTypes.object
}

export default Post

