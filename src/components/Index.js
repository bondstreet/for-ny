
import React from 'react'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingPosts from './LandingPosts'

const Index = (props, { data }) => {
  return (
    <div>
      <LandingNav />
      <LandingHeader />
      <LandingIntro />
      <LandingPosts />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

