
import React from 'react'
import { find } from 'lodash'

const Post = ({ params }, { data }) => {
  const post = find(data.posts, p => p.name === params.name)
  const content = {
    __html: post.html
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date.toString()}</p>
      <div dangerouslySetInnerHTML={content} />
    </div>
  )
}

Post.contextTypes = {
  data: React.PropTypes.object
}

export default Post

