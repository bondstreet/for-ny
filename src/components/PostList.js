
import React from 'react'
import Masonry from 'react-masonry-component'
import Link from './Link'
import PostCard from './PostCard'
import SocialPromo from './SocialPromo'

class PostList extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        const posts = this.props.limit ? this.context.data.posts.slice(0, this.props.limit) : this.context.data.posts

        const postCards = posts.map((post, i) => (
            <div key={i}
                className='inline-block align-top col-12 md-col-6 lg-col-4 px2 mb4'>
                <PostCard {...post} />
            </div>
        ))

        postCards.splice(3, 0, (
            <div key='social-promo' className='inline-block align-top col-12 md-col-6 lg-col-4 px2 sm-px4 md-px2 lg-px2 mb4'>
                <SocialPromo />
            </div>
        ))

        return (
            <Masonry className='mxn2'>
                {postCards}
            </Masonry>
        )
    }
}

PostList.contextTypes = {
    data: React.PropTypes.object
}

export default PostList
