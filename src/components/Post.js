
import React from 'react'
import { findIndex } from 'lodash'
import ShareButtons from './ShareButtons'
import PostNav from './PostNav'

const Post = ({ params }, { data }) => {
    const index = findIndex(data.posts, p => p.name === params.name)
    const post = data.posts[index]
    const content = {
        __html: post.html
    }

    return (
        <div>
            <PostNav current={index} />
            <h1>{post.title}</h1>
            <p>{post.date.toString()}</p>
            {post.image && (
                <img src={post.image} className='fit' />
            )}
            <div dangerouslySetInnerHTML={content} />
            <ShareButtons
                url={data.domain + data.baseurl + data.path}
                title={post.title}
                tweetText={post.tweetText}
            />
        </div>
    )
}

Post.contextTypes = {
    data: React.PropTypes.object
}

export default Post

