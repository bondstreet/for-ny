
import React from 'react'
import Header from './Header'
import PostList from './PostList'
import LeadForm from './LeadForm'

const Index = (props, { data }) => {
  return (
    <div>
      <Header />
      <h2>Index</h2>
      <PostList />
      <LeadForm />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

