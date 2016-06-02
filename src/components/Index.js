
import React from 'react'
import LandingHeader from './LandingHeader'
import PostList from './PostList'

const Index = (props, { data }) => {
  return (
    <div>
      <LandingHeader />
      <h2>Index</h2>
      <PostList />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

