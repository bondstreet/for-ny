
import React from 'react'
import { findIndex } from 'lodash'
import sanitize from 'sanitize-html'
import { Container } from 'rebass'
import Heading from './Heading'
import Text from './Text'
import ShareButtons from './social-buttons/ShareButtons'
import PostNav from './PostNav'
import PostHeroImage from './PostHeroImage'
import PostCard from './PostCard'
import Prose from './Prose'
import NavItem from './NavItem'
import Footer from './Footer'
import Circle from './Circle'
import LandingContact from './LandingContact'

const Post = ({ params }, { data, router }) => {
    const { posts } = data
    const index = findIndex(posts, p => p.name === params.name)
    const post = posts[index]
    const previousPost = posts[index - 1] || false
    const nextPost = posts[index + 1] || false
    const description = sanitize(post.description)

    const sx = {
        header: {
            paddingTop: 162
        }
    }

    const shareUrl = data.domain + data.baseurl + '/posts/' + post.name

    return (
        <div className='bg-mint'>
            <PostNav previousPost={previousPost}
                nextPost={nextPost} />
            <div className='center pb4' style={sx.header}>
                <Heading mega>{post.title}</Heading>
                <Text bold
                    className='mb1'
                    dangerouslySetInnerHTML={{
                        __html: description
                    }} />
                <ShareButtons
                    title={post.title}
                    text={post.tweetText}
                />
            </div>
            {post.image && (
                <Container style={{ maxWidth: 1280 }}>
                    <PostHeroImage
                        className='mb3'
                        src={post.image}
                        caption={post.imageCaption} />
                </Container>
            )}
            <Container px={3} style={{ maxWidth: 768 }}>
                <Heading center className='py4'>
                    What are 3 of your favorite small businesses in New York?
                </Heading>
            </Container>
            <Container style={{ maxWidth: 1024 }} px={3} py={4}>
                <Prose html={post.html} />
                <div className='sm-col-6 mx-auto'>
                    <Circle className='bg-green mint'>
                        <Text className='mb2'>
                            Share this post
                        </Text>
                        <ShareButtons
                            title={post.title}
                            text={post.tweetText} />
                        <Text className='mt2'>
                            #ForNewYork
                        </Text>
                    </Circle>
                </div>
            </Container>
            <div className='py4 bg-peach'>
                <Container>
                    <Heading center>Up Next</Heading>
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
            <LandingContact />
            <Footer />
        </div>
    )
}

Post.contextTypes = {
    data: React.PropTypes.object,
    router: React.PropTypes.object
}

export default Post

