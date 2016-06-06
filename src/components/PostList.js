
import React from 'react'
import Link from './Link'
import PostCard from './PostCard'

const PostList = ({ limit }, { data }) => {

  const posts = limit ? data.posts.slice(limit - 1) : data.posts

  return (
    <div className='mxn2'>
      {data.posts.map((post, i) => {
        return (
            <div key={i}
                className='inline-block align-top col-12 sm-col-6 lg-col-4 px2 mb2'>
                <PostCard {...post} />
            </div>
        )
      })}
    </div>
  )
}

PostList.contextTypes = {
  data: React.PropTypes.object
}

export default PostList

