
import React from 'react'
import Link from './Link'

const PostList = ({ limit }, { data }) => {

  const posts = limit ? data.posts.slice(limit - 1) : data.posts

  return (
    <ul>
      {data.posts.map((post, i) => {
        return (
          <li key={i}>
            <Link to={`/posts/${post.name}`}>
              {post.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

PostList.contextTypes = {
  data: React.PropTypes.object
}

export default PostList

